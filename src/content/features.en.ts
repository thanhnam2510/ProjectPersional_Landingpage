import type { FeatureText } from '@/types/content'

/** English text for each feature, keyed by feature id. */
export const featuresEn: Record<string, FeatureText> = {
  home: {
    kicker: 'Overview',
    title: 'Know what today looks like the moment you sign in',
    points: [
      'Open tasks, overdue work, today’s deadlines, and meeting invites on one screen.',
      'If a meeting is on, join the room straight from the first page.',
      'The next 7 days of meetings: accept or decline with one click.',
      'Progress on every project you work on, updated automatically.',
    ],
  },
  search: {
    kicker: 'Search',
    title: 'Find anything in seconds',
    points: [
      'One box for tasks, projects, colleagues, messages, and meetings.',
      'Type a task code or a few letters of a name.',
      'Each result shows the project, the status, and who owns it.',
      'Open results from the keyboard, no mouse needed.',
    ],
  },
  'my-work': {
    kicker: 'My work',
    title: 'Everyone gets a clear to-do list',
    points: [
      'Assigned work split into overdue, today, the next 7 days, and done.',
      'Time spent against the estimate, and percent complete, at a glance.',
      'Filter by team or project, or search by name.',
      'See the work you have handed to others, too.',
    ],
  },
  notifications: {
    kicker: 'Notifications',
    title: 'Keep track of what matters',
    points: [
      'New assignments, meeting invites, and approved or returned hours all notify you.',
      'Mentions and replies to your comments arrive immediately.',
      'Filter unread, and mark everything read in one click.',
      'Click a notification to open the task, meeting, or post.',
    ],
  },
  weekly: {
    kicker: 'Weekly plan',
    title: 'The whole team on one weekly plan',
    points: [
      'One row per person, one column per day. Add work right in the cell.',
      'Kinds of work: development, meetings, maintenance, bugs, learning, support.',
      'See who is off which half-day and who is working the weekend.',
      'Use it in the Monday meeting, with no separate report to prepare.',
    ],
  },
  project: {
    kicker: 'Project tasks',
    title: 'Manage the work in every project',
    points: [
      'Each task has its own code, owner, due date, estimate, and progress.',
      'Grouped into To do, Doing, and Done; filter to your own work.',
      'Checklists inside a task to break the work down.',
      'Switch to a Kanban board at any time.',
    ],
  },
  kanban: {
    kicker: 'Kanban board',
    title: 'Drag and drop to update status',
    points: [
      'Three clear columns. Drag a card to change its status.',
      'Cards show the due date, owner, priority, and progress.',
      'Add new work right inside a column.',
      'Ideal for the team’s quick daily meeting.',
    ],
  },
  files: {
    kicker: 'Project documents',
    title: 'Project documents stop going missing',
    points: [
      'Upload documents straight to the project, several at once.',
      'Files shared in task comments are collected here automatically.',
      'Filter by images, PDF, documents, and spreadsheets, and search by name.',
      'Browse as a grid with thumbnails or as a list.',
    ],
  },
  timeline: {
    kicker: 'Timeline',
    title: 'Every project on one timeline',
    points: [
      'Day, week, or month view; the red line is today.',
      'Drag to reschedule, drag an edge to change the duration.',
      'See at once which project is late and which task is overdue.',
      'Each project’s completion updates automatically.',
    ],
  },
  workspaces: {
    kicker: 'Project groups',
    title: 'Group projects by client or by area',
    points: [
      'Each group shows its description, projects, and members.',
      'Create a group for a client or a product line.',
      'Invite the right people; others cannot see the projects.',
      'One person can belong to several groups.',
    ],
  },
  workspace: {
    kicker: 'Inside a group',
    title: 'Projects and people in one place',
    points: [
      'Every project in the group, each with its own colour and code.',
      'The member list and each person’s role in the group.',
      'Any member can add work to a project.',
      'Only group owners, managers, and the creator can edit or delete a project.',
    ],
  },
  calendar: {
    kicker: 'Meetings',
    title: 'Book meetings without back-and-forth',
    points: [
      'Week or month view. Book a meeting and invite people in the company.',
      'See who is busy before you pick a time.',
      'Pending invites sit beside the calendar: accept or decline in one click.',
      'Upcoming meetings are shown on the right.',
    ],
  },
  room: {
    kicker: 'Online meeting room',
    title: 'Meet online without leaving TeamFlow',
    points: [
      'Join when it is time, with no link to send and nothing to install.',
      'Camera, microphone, screen sharing, raised hands, and reactions.',
      'The host can mute or remove people; there is chat in the room.',
      'Record the meeting for anyone who missed it.',
    ],
  },
  messages: {
    kicker: 'Chat',
    title: 'Company chat instead of outside chat apps',
    points: [
      'Direct and group chats, with who is online.',
      'Reply to a message, react, and edit or recall your own.',
      'Share photos and documents, and start voice or video calls.',
      'Conversations stay inside the company’s system.',
    ],
  },
  shared: {
    kicker: 'Files in chat',
    title: 'Find the file someone sent in chat',
    points: [
      'One button opens every photo, file, and link in the conversation.',
      'Tabs for Photos, Files, and Links, with search.',
      'Download a file or open it right away.',
      'Jump back to the original message in the chat.',
    ],
  },
  feed: {
    kicker: 'Company feed',
    title: 'Your company’s internal news feed',
    points: [
      'Leadership posts announcements that are pinned and reach everyone.',
      'Staff share updates, photos, documents, and team news.',
      'Comment, reply, tag colleagues, and react.',
      'New posts and comments appear live for anyone viewing.',
    ],
  },
  compose: {
    kicker: 'New post',
    title: 'Post as easily as on social media',
    points: [
      'Write, add several photos, and preview before posting.',
      'Tag colleagues so they are notified.',
      'Drop emoji straight into the text.',
      'Leadership can turn a post into a company-wide announcement.',
    ],
  },
  departments: {
    kicker: 'Departments',
    title: 'An org chart that shows who manages whom',
    points: [
      'Leadership, departments, and sub-teams that match your structure.',
      'Each department has managers and staff, with job titles.',
      'Leave requests and hours go to the right approver automatically.',
      'Managers arrange their own team; leadership changes managers.',
    ],
  },
  leaves: {
    kicker: 'Leave',
    title: 'Request time off in a minute',
    points: [
      'Staff see how many leave days they have left this year.',
      'Request a full day, half a day, or another kind of leave, with a reason.',
      'The request goes to the manager, and the answer comes back as a notification.',
      'Approved leave stays approved, and the full history is kept.',
    ],
  },
  'leave-accrual': {
    kicker: 'Earned leave',
    title: 'Annual leave that builds up month by month',
    points: [
      'Annual leave builds up at the end of each month, counted from the official date on file.',
      'Annual leave entitlement follows each person’s level, employment type, and official date.',
      'Annual leave requests beyond what someone has earned are stopped, with the reason.',
      'Everyone sees what they have earned and what they can still ask for.',
    ],
  },
  'leave-manage': {
    kicker: 'Annual leave',
    title: 'Everyone’s annual leave on one table',
    points: [
      'Set the default number of leave days for the company.',
      'Adjust it per person and add days carried over from last year.',
      'Used, pending, and remaining days, filtered by department.',
      'Export to Excel for payroll and HR reports.',
    ],
  },
  'leave-approvals': {
    kicker: 'Leave approvals',
    title: 'Managers approve requests in the system',
    points: [
      'Each request shows the type, days, dates, and reason.',
      'Approve or reject in one click; the employee is told immediately.',
      'Managers only see requests from their own department.',
      'Leadership sees the whole company.',
    ],
  },
  worklogs: {
    kicker: 'Time tracking',
    title: 'Log hours against each task',
    points: [
      'A month calendar shows how many hours each day holds.',
      'Hours are tied to the right task and project.',
      'Colours show which hours are approved and which are waiting.',
      'Returned hours come with the reason, so they can be fixed.',
    ],
  },
  timesheet: {
    kicker: 'Timesheet',
    title: 'The company timesheet',
    points: [
      'One row per person, one column per day; days off are marked.',
      'Week or month, filtered by department and project.',
      'Hours worked against expected hours, so you see who is short.',
      'Export to Excel for payroll and reporting.',
    ],
  },
  report: {
    kicker: 'Time report',
    title: 'See where the team’s time goes',
    points: [
      'Totals for approved, pending, and returned hours.',
      'A chart for each day of the month.',
      'Hours by project, for costing.',
      'For one person or the whole company, with a file export.',
    ],
  },
  approvals: {
    kicker: 'Approvals',
    title: 'One place to approve hours',
    points: [
      'Managers and leadership see everything waiting for their decision.',
      'Filter by group, project, person, and status.',
      'Approve or return one line or many at once.',
      'Leave requests sit on the tab next door.',
    ],
  },
  workload: {
    kicker: 'Workload',
    title: 'Spot overload before deadlines slip',
    points: [
      'Three levels: overloaded, about right, and room to spare, updated weekly.',
      'Filter by department so each manager sees their own team.',
      'Hours worked against capacity, and each person’s time off.',
      'Move work to someone with room as soon as it is needed.',
    ],
  },
  admin: {
    kicker: 'Account administration',
    title: 'Control who can get in',
    points: [
      'Every account and its last sign-in.',
      'Lock the account of someone who has left right away.',
      'Grant or remove leadership access.',
      'Only leadership can open this screen.',
    ],
  },
  onboarding: {
    kicker: 'New employees',
    title: 'Welcome a new hire with one form',
    points: [
      'Account, department, job title, level, and access in one step.',
      'Pick the department and the project groups they need are filled in.',
      'Managers add people to their own department without waiting for HR.',
      'Send the invitation by email, or copy the link to share another way.',
    ],
  },
  invite: {
    kicker: 'Invitations',
    title: 'New hires choose their own password, safely',
    points: [
      'Invitation links work once and expire after 3 days.',
      'The page shows the account, the department, and who invited them.',
      'Nobody sends passwords over chat or email.',
      'Forgot the password? People reset it themselves.',
    ],
  },
  welcome: {
    kicker: 'First day',
    title: 'Day one, and they already know where they fit',
    points: [
      'Their department, manager, and project groups on one page.',
      'The leave they have and how to ask for it.',
      'What to do first: profile, work, meetings, the company feed.',
      'The whole company welcomes them on the feed.',
    ],
  },
  employment: {
    kicker: 'Employment',
    title: 'Interns, probation, official staff, partners',
    points: [
      'Change someone’s level when they pass probation in a few clicks.',
      'Record the official date that annual leave is counted from.',
      'Tell internal staff apart from people outside the company.',
      'Managers keep it up to date for their own people.',
    ],
  },
  security: {
    kicker: 'Security center',
    title: 'The key security signals on one screen',
    points: [
      'Sign-ins and failed sign-ins over the last 24 hours.',
      'Warnings about password guessing, locked accounts, and unused invitations.',
      'Who has leadership access, and recent changes of rights.',
      'When the last backup was taken.',
    ],
  },
  audit: {
    kicker: 'Activity log',
    title: 'Who did what, when, and from where',
    points: [
      'Sign-ins, password changes, access granted, accounts locked, people moved.',
      'Each entry shows who, to whom, the address, and the device.',
      'Filter by kind of event, person, date, or failures only.',
      'Export to a spreadsheet for checks and audits.',
    ],
  },
  backups: {
    kicker: 'Backups',
    title: 'Back up and help restore data, reducing the risk when something goes wrong',
    points: [
      'Each backup holds the database plus attachments and profile photos.',
      'Runs at 02:00 every day by default and keeps the 14 latest automatic backups; take one by hand when needed.',
      'Download a backup to keep another copy elsewhere in case the server fails.',
      'See how much space they take and how much is left.',
    ],
  },
  restore: {
    kicker: 'Restore',
    title: 'Restore to a backup when you need to',
    points: [
      'Pick a backup to bring the data back to that point in time.',
      'It must be typed to confirm; other actions are paused while it runs.',
      'A fresh backup is taken first, so you can go back if needed.',
      'Security log entries recorded after the backup are kept.',
    ],
  },
  'perf-manager': {
    kicker: 'Manager review',
    title: 'Score each criterion, with clear weights',
    points: [
      'Rate every criterion 1–5 with a comment, right next to the self-assessment.',
      'The total is worked out from the weights and how far the goals got.',
      'Strengths, areas to improve, and a development plan on the same screen.',
      'The reviewer follows your org chart.',
    ],
  },
  'perf-self': {
    kicker: 'Self-assessment',
    title: 'Staff look back before their manager scores',
    points: [
      'Rate each criterion and sum up results and blockers.',
      'Save a draft and edit freely before sending.',
      'Set goals and key results for the cycle and update progress as you go.',
      'Reminders before the deadline, so nobody forgets.',
    ],
  },
  'perf-result': {
    kicker: 'Results & history',
    title: 'Clear results, open any time',
    points: [
      'Final score, rating, and the manager’s comments once HR signs off.',
      'Self-assessment and manager scores side by side for each criterion.',
      'Past cycles are kept to see progress over time.',
      'Unfinished development items carry over to the next cycle.',
    ],
  },
  'perf-cycle': {
    kicker: 'Review cycles',
    title: 'Monthly, quarterly, or yearly, step by step',
    points: [
      'Pick the departments, the self-assessment deadline, and the manager deadline.',
      'See who has assessed themselves, who has been scored, and what awaits sign-off.',
      'HR checks, adjusts scores with a reason, sends back, or signs off.',
      'Change a reviewer or add people to the cycle when needed.',
    ],
  },
  'perf-template': {
    kicker: 'Review templates',
    title: 'Criteria that fit each role',
    points: [
      'Criteria with a description and a scoring guide.',
      'Weights for each criterion and for goals, which must add up to 100%.',
      'Different templates for engineering, product, or sales.',
      'Earlier cycles keep the template they ran with.',
    ],
  },
  'perf-dashboard': {
    kicker: 'Performance overview',
    title: 'The whole company’s performance at a glance',
    points: [
      'Progress through each step of the cycle on one screen.',
      'Rating distribution and average score per department.',
      'Spot top performers and people who need support.',
      'Export a spreadsheet for leadership.',
    ],
  },
  'perf-360': {
    kicker: '360° feedback',
    title: 'Colleagues give honest, anonymous feedback',
    points: [
      'Managers or staff suggest colleagues to ask.',
      'The person reviewed sees the feedback, not who wrote it.',
      'Feedback is for reference and does not change the score.',
      'Invitations and notifications when feedback is needed.',
    ],
  },
  'request-new': {
    kicker: 'New request',
    title: 'No more messaging a manager directly',
    points: [
      'Pick a request type: equipment, access, reimbursement, design…',
      'Fill in a ready-made form and attach a quote or invoice.',
      'It goes straight to the right team and person.',
      'Set a priority so urgent things are handled first.',
    ],
  },
  requests: {
    kicker: 'Handling requests',
    title: 'Follow a request from sent to done',
    points: [
      'Accept, reject with a reason, assign to someone in the team, or mark done.',
      'Turn a request into a project task in a few clicks.',
      'The requester sees progress, history, and the conversation in the request.',
      'A notification every time the status changes.',
    ],
  },
  'request-templates': {
    kicker: 'Request templates',
    title: 'Managers build the forms for their team',
    points: [
      'Text, number, date, choice, or file fields.',
      'Choose the receiving team and a default handler.',
      'Reorder fields, mark them required, and add hints.',
      'Turn a template off when it is no longer used; history stays.',
    ],
  },
  assets: {
    kicker: 'Asset inventory',
    title: 'Which device, who has it, is it under warranty',
    points: [
      'Laptops, monitors, phones, and other devices, each with its own code.',
      'Serial, price, vendor, warranty date, and location.',
      'Filter by category or status, or search by holder.',
      'Print QR labels for the whole inventory in one click.',
    ],
  },
  'asset-detail': {
    kicker: 'Asset record',
    title: 'A device’s whole life in one place',
    points: [
      'Handovers, returns, maintenance, and audits over time.',
      'Scan the QR code on the device to open its record.',
      'Schedule maintenance and record its cost and result.',
      'Dispose of it with a reason, date, and recovered value.',
    ],
  },
  'asset-handover': {
    kicker: 'Handover & return',
    title: 'Handovers are confirmed, returns are checked',
    points: [
      'Pick the person, the date, the condition, and a return date.',
      'Hand a device over straight from an equipment request.',
      'On return, record the condition and send it for repair if damaged.',
      'Locking a leaver’s account reminds you to collect their devices.',
    ],
  },
  'my-assets': {
    kicker: 'My assets',
    title: 'Staff know what they are holding',
    points: [
      'The devices assigned to them, with condition and return date.',
      'Confirm receipt with one click, timestamped.',
      'See the request a device was issued for.',
      'Reminders as the return date approaches.',
    ],
  },
  'asset-alerts': {
    kicker: 'Asset alerts',
    title: 'No overdue returns or missed warranties',
    points: [
      'Alerts for expiring warranties, overdue returns, and due maintenance.',
      'A list of devices to collect from leavers or overdue holders.',
      'Asset managers are notified automatically.',
      'Each alert is sent once, without nagging.',
    ],
  },
  'asset-audit': {
    kicker: 'Inventory audit',
    title: 'Check what is really there against the system',
    points: [
      'Scan or mark each asset: present, missing, or with the wrong person.',
      'See how many are checked and every mismatch.',
      'Close the audit and update the records from its results.',
      'Every audit is kept for later comparison.',
    ],
  },
  budgets: {
    kicker: 'Budgets',
    title: 'See which project is about to overspend',
    points: [
      'Budget, spend, and percentage used for every project.',
      'Warnings at 80% and when spending passes 100%.',
      'Everything in VND, no conversions.',
      'Leadership sees costs without spreadsheets.',
    ],
  },
  'project-budget': {
    kicker: 'Project costs',
    title: 'Real cost from hours worked and other expenses',
    points: [
      'Labour cost from approved hours times the hourly rate.',
      'Add software, equipment, and service costs to the project.',
      'Monthly cost chart against the budget.',
      'Project leads see totals, not each person’s pay.',
    ],
  },
  'cost-rates': {
    kicker: 'Hourly rates',
    title: 'Rates by level or per person',
    points: [
      'Set rates for interns, probation, and full-time staff.',
      'A personal rate takes priority.',
      'Rates have start dates, so changes do not rewrite past costs.',
      'Recalculate costs for a period when needed.',
    ],
  },
}
