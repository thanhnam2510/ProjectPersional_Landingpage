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
      'Progress on every project you work on, always up to date.',
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
    title: 'Never miss what matters',
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
      'Each project’s completion is always current.',
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
      'Upcoming meetings are always on the right.',
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
      'Official staff start at zero and earn more at the end of every month.',
      'Interns and people on probation have no annual leave; wrong requests are stopped.',
      'People from outside the company are left out of the leave budget.',
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
      'Record the official date so leave is counted from that month.',
      'Tell internal staff apart from people outside the company.',
      'Managers keep it up to date for their own people.',
    ],
  },
  security: {
    kicker: 'Security center',
    title: 'One screen to tell whether everything is safe',
    points: [
      'Sign-ins and failed sign-ins over the last 24 hours.',
      'Warnings about password guessing, locked accounts, and unused invitations.',
      'Who has leadership access, and every recent change of rights.',
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
    title: 'Your data backed up automatically every night',
    points: [
      'Work, messages, leave, hours, and every attachment in one backup.',
      'Every day on its own, keeping the latest ones, plus one whenever you want.',
      'Download backups to keep a copy somewhere else.',
      'See how much space they take and how much is left.',
    ],
  },
  restore: {
    kicker: 'Restore',
    title: 'Something went wrong? Put the data back',
    points: [
      'Pick a backup and restore everything from it.',
      'It must be confirmed on purpose; no accidental clicks.',
      'The current data is saved first, so it can always be undone.',
      'The activity log is kept through a restore.',
    ],
  },
}
