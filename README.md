# Unpopular Exchange
A Next.js web application where users can share unpopular opinions and pet peeves, then discover whether their thoughts are truly unconventional or surprisingly mainstream.

## Overview
Unpopular Exchange is my first project built with Next.js. The platform encourages authentic discussion by allowing users to post their controversial thoughts and gauge community sentiment through a simple voting system.

**Current Status:** MVP with local JSON data storage\
**Planned Migration:** Vercel deployment with Supabase database\
**Sample Data:** 3 users, 4 categories (1 shared), and 4 discussion threads (2 opinions, 2 pet peeves)

## Core Features
### Discussion Threads
The heart of the platform where users share their thoughts and engage with the community.

#### Thread Components
- Username or nickname
- The unpopular opinion or pet peeve
- Vote count and community verdict
- Comment count (including nested replies)
- Categorization tags
- Timestamps

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

### Activity Page
For icon-based notifications and user and platform statistics.

#### Notifications
- **Paperclip:** New blog posts
- **Gavel:** Votes on a user's thread
- **Thumbtack:** Posts to subscribed categories
- **Arrow:** Replies to threads and messages

#### Statistics
- **Your Stats:** Lists cumulative user threads, comments, and votes
- **Platform Statistics:** Lists cumulative (or daily) platform threads, comments, and votes.

### Blog Page
For administer engagement for the community and possibly input from them.

#### Blog Preview
- **Title:** The title of the blog post
- **Pin:** Pinned blog posts are tagged
- **Type:** The topic of the blog post
- **Date:** The publish (or update) date

## Planned Features
The following enhancements are scheduled for future releases:

- **Notifications:** Real-time updates for votes, comments, and replies
- **User Submission:** Threads and comment postings
- **User Accounts:** Full authentication and profile management system
- **Feed Page:** Curated threads from subscribed categories
- **Settings Page:** Personalized preferences and account management

## Future Possibilities
*Unpopular Exchange* could become a sibling site to similar sites under a parent domain like *The Honest Web*. The sibling sites could include:

- **Unpopular Exchange:** Share and vote on unpopular opinions and pet peeves, unpopular <-> popular.
- **Could Be Better:** Reflect on things that didn't live up to their potential, forgivable <-> fixable.
- **Actually Amazing:** Celebrate things that exceeded expectations or are underrated, overrated <-> underrated.
- **Why Is This A Thing?:** Question cultural norms, trends, or baffling behaviors, strange <-> sensible. 