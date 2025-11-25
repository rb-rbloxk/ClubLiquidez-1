# ClubLiquidez Database Schema

This directory contains the database migrations and schema for the ClubLiquidez platform.

## Database Structure

### Core Tables

1. **user_profiles** - Extended user profile information
   - Complements Supabase auth.users
   - Stores additional user data (phone, bio, preferences, etc.)

2. **subscriptions** - User service subscriptions
   - Copy Trading
   - Algo Trading
   - Annual Membership
   - Master Course

3. **payments** - Payment transactions
   - Tracks all payment records
   - Links to subscriptions

4. **course_enrollments** - Master Course enrollments
   - Tracks enrollment status and progress
   - 60 days course + 30 days live sessions

5. **course_module_progress** - Course module completion tracking
   - 5 modules: Breakout Strategy, Risk Management, Psychology, Execution Discipline, Strategy Building
   - Tracks completion and quiz scores

### Trading Features

6. **copy_trading_relationships** - Copy trading follower-trader relationships
   - Manages who follows which traders
   - Risk parameters and copy settings

7. **copy_trading_performance** - Copy trading execution metrics
   - Tracks copied trades and performance

8. **algo_trading_strategies** - Algorithmic trading strategies
   - User-created trading algorithms
   - Configuration and backtest results

9. **algo_trading_executions** - Algorithm execution logs
   - Records all algorithm trades

### Support & Communication

10. **contact_submissions** - Contact form submissions
    - Support tickets and inquiries

11. **notifications** - User notifications
    - Course updates, payment alerts, trade notifications, etc.

## Installation

### Option 1: Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `001_initial_schema.sql`
4. Click **Run**

### Option 2: Using Supabase CLI

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Link to your project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### Option 3: Using Migration File Directly

1. Copy `001_initial_schema.sql` to your Supabase project
2. Execute via Supabase SQL Editor or CLI

## Row Level Security (RLS)

All tables have Row Level Security enabled with policies that:
- Allow users to view/update only their own data
- Prevent unauthorized access
- Support admin access (can be extended)

## Key Features

- **Automatic Profile Creation**: User profiles are automatically created when users sign up
- **Progress Tracking**: Course progress is automatically calculated when modules are completed
- **Timestamp Management**: All tables have automatic `updated_at` timestamp updates
- **Indexes**: Optimized indexes for common query patterns
- **Data Integrity**: Foreign key constraints and check constraints ensure data consistency

## Next Steps

After running the migration:

1. **Verify Tables**: Check that all tables were created successfully
2. **Test RLS Policies**: Ensure users can only access their own data
3. **Set Up Admin Access**: Create admin policies if needed for support staff
4. **Configure Webhooks**: Set up webhooks for payment processing (Stripe, PayPal, etc.)

## Environment Variables

Make sure your `.env.local` has:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Support

For issues or questions, refer to:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase SQL Reference](https://supabase.com/docs/guides/database)

