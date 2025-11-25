-- ClubLiquidez Database Schema (Fixed Version)
-- This migration creates all required tables for the ClubLiquidez platform
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing types if they exist (for re-running migration)
DROP TYPE IF EXISTS subscription_type CASCADE;
DROP TYPE IF EXISTS subscription_status CASCADE;
DROP TYPE IF EXISTS enrollment_status CASCADE;
DROP TYPE IF EXISTS payment_status CASCADE;
DROP TYPE IF EXISTS payment_method_type CASCADE;
DROP TYPE IF EXISTS notification_type CASCADE;

-- ============================================================================
-- USER PROFILES
-- ============================================================================
-- Extended user profile information (complements Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    bio TEXT,
    country TEXT,
    timezone TEXT DEFAULT 'UTC',
    preferred_language TEXT DEFAULT 'en',
    notification_preferences JSONB DEFAULT '{"email": true, "push": true, "sms": false}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.user_profiles;
CREATE POLICY "Users can view their own profile"
    ON public.user_profiles FOR SELECT
    USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.user_profiles;
CREATE POLICY "Users can update their own profile"
    ON public.user_profiles FOR UPDATE
    USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.user_profiles;
CREATE POLICY "Users can insert their own profile"
    ON public.user_profiles FOR INSERT
    WITH CHECK (auth.uid() = id);

-- ============================================================================
-- SUBSCRIPTIONS & MEMBERSHIPS
-- ============================================================================
-- Subscription types enum
CREATE TYPE subscription_type AS ENUM (
    'copy_trading',
    'algo_trading',
    'annual_membership',
    'master_course'
);

-- Subscription status enum
CREATE TYPE subscription_status AS ENUM (
    'active',
    'cancelled',
    'expired',
    'pending',
    'suspended'
);

-- User subscriptions table
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subscription_type subscription_type NOT NULL,
    status subscription_status DEFAULT 'pending',
    start_date TIMESTAMPTZ DEFAULT NOW(),
    end_date TIMESTAMPTZ,
    auto_renew BOOLEAN DEFAULT false,
    price DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    payment_method TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_active_subscription UNIQUE (user_id, subscription_type, status) 
        WHERE status = 'active'
);

-- Enable Row Level Security
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for subscriptions
DROP POLICY IF EXISTS "Users can view their own subscriptions" ON public.subscriptions;
CREATE POLICY "Users can view their own subscriptions"
    ON public.subscriptions FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own subscriptions" ON public.subscriptions;
CREATE POLICY "Users can insert their own subscriptions"
    ON public.subscriptions FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- PAYMENTS & TRANSACTIONS
-- ============================================================================
-- Payment status enum
CREATE TYPE payment_status AS ENUM (
    'pending',
    'completed',
    'failed',
    'refunded',
    'cancelled'
);

-- Payment method enum
CREATE TYPE payment_method_type AS ENUM (
    'credit_card',
    'debit_card',
    'bank_transfer',
    'paypal',
    'stripe',
    'crypto'
);

-- Payments table
CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES public.subscriptions(id) ON DELETE SET NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    status payment_status DEFAULT 'pending',
    payment_method payment_method_type,
    transaction_id TEXT UNIQUE,
    payment_provider TEXT,
    provider_transaction_id TEXT,
    description TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for payments
DROP POLICY IF EXISTS "Users can view their own payments" ON public.payments;
CREATE POLICY "Users can view their own payments"
    ON public.payments FOR SELECT
    USING (auth.uid() = user_id);

-- ============================================================================
-- MASTER COURSE ENROLLMENTS
-- ============================================================================
-- Course enrollment status enum
CREATE TYPE enrollment_status AS ENUM (
    'enrolled',
    'in_progress',
    'completed',
    'cancelled',
    'expired'
);

-- Course enrollments table
CREATE TABLE IF NOT EXISTS public.course_enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES public.subscriptions(id) ON DELETE SET NULL,
    status enrollment_status DEFAULT 'enrolled',
    enrolled_at TIMESTAMPTZ DEFAULT NOW(),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    expires_at TIMESTAMPTZ,
    progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    last_accessed_at TIMESTAMPTZ,
    certificate_issued BOOLEAN DEFAULT false,
    certificate_url TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for course_enrollments
DROP POLICY IF EXISTS "Users can view their own enrollments" ON public.course_enrollments;
CREATE POLICY "Users can view their own enrollments"
    ON public.course_enrollments FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own enrollments" ON public.course_enrollments;
CREATE POLICY "Users can update their own enrollments"
    ON public.course_enrollments FOR UPDATE
    USING (auth.uid() = user_id);

-- ============================================================================
-- COURSE MODULE PROGRESS
-- ============================================================================
-- Course modules progress tracking
CREATE TABLE IF NOT EXISTS public.course_module_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enrollment_id UUID NOT NULL REFERENCES public.course_enrollments(id) ON DELETE CASCADE,
    module_id INTEGER NOT NULL,
    module_title TEXT NOT NULL,
    completed BOOLEAN DEFAULT false,
    progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    time_spent_minutes INTEGER DEFAULT 0,
    quiz_score DECIMAL(5, 2),
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(enrollment_id, module_id)
);

-- Enable Row Level Security
ALTER TABLE public.course_module_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies for course_module_progress
DROP POLICY IF EXISTS "Users can view their own module progress" ON public.course_module_progress;
CREATE POLICY "Users can view their own module progress"
    ON public.course_module_progress FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.course_enrollments 
            WHERE id = course_module_progress.enrollment_id 
            AND user_id = auth.uid()
        )
    );

DROP POLICY IF EXISTS "Users can update their own module progress" ON public.course_module_progress;
CREATE POLICY "Users can update their own module progress"
    ON public.course_module_progress FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.course_enrollments 
            WHERE id = course_module_progress.enrollment_id 
            AND user_id = auth.uid()
        )
    );

-- ============================================================================
-- COPY TRADING
-- ============================================================================
-- Copy trading relationships
CREATE TABLE IF NOT EXISTS public.copy_trading_relationships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    follower_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    trader_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    is_active BOOLEAN DEFAULT true,
    risk_level TEXT DEFAULT 'medium',
    max_position_size DECIMAL(10, 2),
    max_daily_loss DECIMAL(10, 2),
    copy_percentage DECIMAL(5, 2) DEFAULT 100.00,
    auto_copy BOOLEAN DEFAULT true,
    started_at TIMESTAMPTZ DEFAULT NOW(),
    stopped_at TIMESTAMPTZ,
    total_copied_trades INTEGER DEFAULT 0,
    total_profit_loss DECIMAL(10, 2) DEFAULT 0,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT no_self_follow CHECK (follower_id != trader_id),
    UNIQUE(follower_id, trader_id)
);

-- Enable Row Level Security
ALTER TABLE public.copy_trading_relationships ENABLE ROW LEVEL SECURITY;

-- RLS Policies for copy_trading_relationships
DROP POLICY IF EXISTS "Users can view their own copy trading relationships" ON public.copy_trading_relationships;
CREATE POLICY "Users can view their own copy trading relationships"
    ON public.copy_trading_relationships FOR SELECT
    USING (auth.uid() = follower_id OR auth.uid() = trader_id);

DROP POLICY IF EXISTS "Users can create copy trading relationships" ON public.copy_trading_relationships;
CREATE POLICY "Users can create copy trading relationships"
    ON public.copy_trading_relationships FOR INSERT
    WITH CHECK (auth.uid() = follower_id);

DROP POLICY IF EXISTS "Users can update their own copy trading relationships" ON public.copy_trading_relationships;
CREATE POLICY "Users can update their own copy trading relationships"
    ON public.copy_trading_relationships FOR UPDATE
    USING (auth.uid() = follower_id);

-- Copy trading performance metrics
CREATE TABLE IF NOT EXISTS public.copy_trading_performance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    relationship_id UUID NOT NULL REFERENCES public.copy_trading_relationships(id) ON DELETE CASCADE,
    trader_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    follower_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    trade_id TEXT,
    symbol TEXT,
    trade_type TEXT,
    entry_price DECIMAL(10, 2),
    exit_price DECIMAL(10, 2),
    quantity DECIMAL(10, 2),
    profit_loss DECIMAL(10, 2),
    profit_loss_percentage DECIMAL(5, 2),
    copied_at TIMESTAMPTZ DEFAULT NOW(),
    executed_at TIMESTAMPTZ,
    status TEXT DEFAULT 'pending',
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.copy_trading_performance ENABLE ROW LEVEL SECURITY;

-- RLS Policies for copy_trading_performance
DROP POLICY IF EXISTS "Users can view their own copy trading performance" ON public.copy_trading_performance;
CREATE POLICY "Users can view their own copy trading performance"
    ON public.copy_trading_performance FOR SELECT
    USING (auth.uid() = follower_id OR auth.uid() = trader_id);

-- ============================================================================
-- ALGO TRADING
-- ============================================================================
-- Algorithm configurations
CREATE TABLE IF NOT EXISTS public.algo_trading_strategies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    strategy_type TEXT,
    is_active BOOLEAN DEFAULT false,
    configuration JSONB NOT NULL DEFAULT '{}'::jsonb,
    risk_parameters JSONB DEFAULT '{"max_drawdown": 20, "max_position_size": 1000}'::jsonb,
    backtest_results JSONB DEFAULT '{}'::jsonb,
    total_trades INTEGER DEFAULT 0,
    win_rate DECIMAL(5, 2) DEFAULT 0,
    total_profit_loss DECIMAL(10, 2) DEFAULT 0,
    sharpe_ratio DECIMAL(5, 2),
    max_drawdown DECIMAL(5, 2),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_executed_at TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE public.algo_trading_strategies ENABLE ROW LEVEL SECURITY;

-- RLS Policies for algo_trading_strategies
DROP POLICY IF EXISTS "Users can view their own strategies" ON public.algo_trading_strategies;
CREATE POLICY "Users can view their own strategies"
    ON public.algo_trading_strategies FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can manage their own strategies" ON public.algo_trading_strategies;
CREATE POLICY "Users can manage their own strategies"
    ON public.algo_trading_strategies FOR ALL
    USING (auth.uid() = user_id);

-- Algorithm execution logs
CREATE TABLE IF NOT EXISTS public.algo_trading_executions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    strategy_id UUID NOT NULL REFERENCES public.algo_trading_strategies(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    symbol TEXT NOT NULL,
    action TEXT NOT NULL,
    price DECIMAL(10, 2),
    quantity DECIMAL(10, 2),
    status TEXT DEFAULT 'pending',
    execution_time TIMESTAMPTZ DEFAULT NOW(),
    profit_loss DECIMAL(10, 2),
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.algo_trading_executions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for algo_trading_executions
DROP POLICY IF EXISTS "Users can view their own executions" ON public.algo_trading_executions;
CREATE POLICY "Users can view their own executions"
    ON public.algo_trading_executions FOR SELECT
    USING (auth.uid() = user_id);

-- ============================================================================
-- CONTACT & SUPPORT
-- ============================================================================
-- Contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    priority TEXT DEFAULT 'normal',
    assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    response TEXT,
    responded_at TIMESTAMPTZ,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions
DROP POLICY IF EXISTS "Users can view their own submissions" ON public.contact_submissions;
CREATE POLICY "Users can view their own submissions"
    ON public.contact_submissions FOR SELECT
    USING (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "Users can create contact submissions" ON public.contact_submissions;
CREATE POLICY "Users can create contact submissions"
    ON public.contact_submissions FOR INSERT
    WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- ============================================================================
-- NOTIFICATIONS
-- ============================================================================
-- Notification types enum
CREATE TYPE notification_type AS ENUM (
    'course_update',
    'subscription_expiry',
    'payment_success',
    'payment_failed',
    'trade_executed',
    'copy_trade_alert',
    'system_announcement',
    'support_response'
);

-- User notifications
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    type notification_type NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    action_url TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    read_at TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for notifications
DROP POLICY IF EXISTS "Users can view their own notifications" ON public.notifications;
CREATE POLICY "Users can view their own notifications"
    ON public.notifications FOR SELECT
    USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own notifications" ON public.notifications;
CREATE POLICY "Users can update their own notifications"
    ON public.notifications FOR UPDATE
    USING (auth.uid() = user_id);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON public.user_profiles(id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_type_status ON public.subscriptions(subscription_type, status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_end_date ON public.subscriptions(end_date) WHERE status = 'active';
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_subscription_id ON public.payments(subscription_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_transaction_id ON public.payments(transaction_id);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_user_id ON public.course_enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_course_enrollments_status ON public.course_enrollments(status);
CREATE INDEX IF NOT EXISTS idx_course_module_progress_enrollment_id ON public.course_module_progress(enrollment_id);
CREATE INDEX IF NOT EXISTS idx_course_module_progress_module_id ON public.course_module_progress(module_id);
CREATE INDEX IF NOT EXISTS idx_copy_trading_follower_id ON public.copy_trading_relationships(follower_id);
CREATE INDEX IF NOT EXISTS idx_copy_trading_trader_id ON public.copy_trading_relationships(trader_id);
CREATE INDEX IF NOT EXISTS idx_copy_trading_active ON public.copy_trading_relationships(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_algo_strategies_user_id ON public.algo_trading_strategies(user_id);
CREATE INDEX IF NOT EXISTS idx_algo_strategies_active ON public.algo_trading_strategies(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_algo_executions_strategy_id ON public.algo_trading_executions(strategy_id);
CREATE INDEX IF NOT EXISTS idx_algo_executions_user_id ON public.algo_trading_executions(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON public.notifications(user_id, is_read) WHERE is_read = false;
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON public.notifications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_user_id ON public.contact_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);

-- ============================================================================
-- FUNCTIONS & TRIGGERS
-- ============================================================================
-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON public.user_profiles;
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_subscriptions_updated_at ON public.subscriptions;
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON public.subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_payments_updated_at ON public.payments;
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON public.payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_course_enrollments_updated_at ON public.course_enrollments;
CREATE TRIGGER update_course_enrollments_updated_at BEFORE UPDATE ON public.course_enrollments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_course_module_progress_updated_at ON public.course_module_progress;
CREATE TRIGGER update_course_module_progress_updated_at BEFORE UPDATE ON public.course_module_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_copy_trading_relationships_updated_at ON public.copy_trading_relationships;
CREATE TRIGGER update_copy_trading_relationships_updated_at BEFORE UPDATE ON public.copy_trading_relationships
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_algo_trading_strategies_updated_at ON public.algo_trading_strategies;
CREATE TRIGGER update_algo_trading_strategies_updated_at BEFORE UPDATE ON public.algo_trading_strategies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_contact_submissions_updated_at ON public.contact_submissions;
CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_profiles (id, full_name)
    VALUES (
        NEW.id,
        NEW.raw_user_meta_data->>'full_name'
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile when user signs up
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update course enrollment progress
CREATE OR REPLACE FUNCTION update_course_progress()
RETURNS TRIGGER AS $$
DECLARE
    total_modules INTEGER := 5;
    completed_modules INTEGER;
    new_progress INTEGER;
BEGIN
    SELECT COUNT(*) INTO completed_modules
    FROM public.course_module_progress
    WHERE enrollment_id = NEW.enrollment_id AND completed = true;
    
    new_progress := (completed_modules * 100) / total_modules;
    
    UPDATE public.course_enrollments
    SET progress_percentage = new_progress,
        updated_at = NOW()
    WHERE id = NEW.enrollment_id;
    
    IF completed_modules = total_modules THEN
        UPDATE public.course_enrollments
        SET status = 'completed',
            completed_at = NOW()
        WHERE id = NEW.enrollment_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update course progress when module is completed
DROP TRIGGER IF EXISTS on_module_progress_update ON public.course_module_progress;
CREATE TRIGGER on_module_progress_update
    AFTER UPDATE ON public.course_module_progress
    FOR EACH ROW
    WHEN (OLD.completed IS DISTINCT FROM NEW.completed)
    EXECUTE FUNCTION update_course_progress();

