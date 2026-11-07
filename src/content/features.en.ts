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
}
