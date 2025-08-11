# Unpopular Exchange
A Next.js and TypeScript web application where users can share unpopular opinions and pet peeves, then discover whether their thoughts are truly unconventional or surprisingly mainstream.

## Overview
Unpopular Exchange is my first project built with Next.js and TypeScript. The platform encourages authentic discussion by allowing users to post their controversial thoughts and gauge community sentiment through a simple voting system.

**Current Status:** MVP with local JSON data storage\
**Planned Migration:** Vercel deployment with Supabase database\
**Sample Data:** 3 users, 4 categories (1 shared), and 4 discussion threads (2 opinions, 2 pet peeves)

## Core Features
### Discussion Threads
The heart of the platform where users share their thoughts and engage with the community.

#### Thread Components
- Username or chosen nickname
- The unpopular opinion or pet peeve
- Vote count and community verdict
- Comment count (including nested replies)
- Categorization tags
- Timestamps *(coming soon)*

#### Display Modes
- **Preview Mode:** Condensed view for browsing thread listings
- **Discussion Mode:** Full view with voting interface and comment system

#### User Identity & Privacy
- **Nicknames:** Users can post anonymously using aliases to avoid judgment on sensitive topics
- **Consistency:** One identity per thread (including all comments within that thread)
- **Privacy:** User profiles remain private; names only help users find related content

#### Voting System
- **Simple Choice:** Agree or Disagree options
- **Flexibility:** Users can change their vote anytime (no vote retraction)
- **Fairness:** Thread creators must vote separately like any other user
- **One Vote Rule:** Each user gets exactly one vote per thread

#### Categorization
- **Visual Categories:** Icon-based topic classification system
- **Separation:** Opinions and pet peeves maintain distinct category spaces
- **Navigation:** Category icons link to filtered thread collections
- **Dual Classification:** Threads can belong to up to two categories for broader visibility

#### Popularity Verdict
- **Calculation:** Percentage of users who agree with the post
- **Threshold:** <50% = Unpopular, ≥50% = Popular
- **Visual Indicators:** 
  - Preview mode: Red/blue corner badges with "UNPOPULAR"/"POPULAR" labels
  - Discussion mode: Gradient progress bar (red to blue) with position marker

### User Profiles
Private dashboards for tracking engagement and measuring unpopularity.

#### Profile Features
- **Thread History:** All posts created by the user
- **Contribution Tracking:** Threads where the user has participated
- **Unpopular Score:** Personal metric showing percentage of unpopular positions

#### Unpopular Score Breakdown
- **Scope Options:** Calculate from owned threads only or all participated threads
- **Category Analysis:** Detailed breakdown by opinions and pet peeves and their topics
- **Visual Representation:** Red and blue pie chart showing popular vs. unpopular ratio

### Personalized Feed
Users have full control over their content feed through category subscriptions. Users can subscribe to topics they're interested in, or leave all categories unsubscribed to see everything. Subscribed categories are listed on the feed page with links to their respective pages, while subscription management happens on individual category pages.

## Planned Features
The following enhancements are scheduled for future releases:

- **Notifications:** Real-time updates for votes, comments, and replies
- **Content Moderation:** Community-driven submission review system
- **Settings Page:** Personalized preferences and account management
- **User Accounts:** Full authentication and profile management system