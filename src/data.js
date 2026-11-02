export const kpis = [
  { id: "active", value: 24, label: "Active Studies", color: "#2563eb", icon: "FileTextOutlined" },
  { id: "pending", value: 8, label: "Pending Submission", color: "#e0a800", icon: "ClockCircleOutlined" },
  { id: "recs", value: 37, label: "Open Recommendations", color: "#6d3fc0", icon: "UnorderedListOutlined" },
  { id: "overdue", value: 12, label: "Overdue Milestones", color: "#dc2626", icon: "WarningOutlined" },
];

export const studyTypes = [
  { label: "Financial Audit", value: 8, color: "#2563eb" },
  { label: "Performance Audit", value: 7, color: "#1f9d7a" },
  { label: "Investigation", value: 6, color: "#e0a800" },
  { label: "Other", value: 3, color: "#6d3fc0" },
];

export const centers = [
  { label: "CDER", value: 9, color: "#2563eb" },
  { label: "CBER", value: 6, color: "#1f9d7a" },
  { label: "CDRH", value: 5, color: "#e8832a" },
  { label: "CFSAN", value: 3, color: "#6d3fc0" },
  { label: "Other", value: 1, color: "#64748b" },
];

export const aging = [
  { label: "< 6 months", value: 12, color: "#2e9e44" },
  { label: "6–12 months", value: 10, color: "#e0a800" },
  { label: "1–2 years", value: 7, color: "#e8832a" },
  { label: "> 2 years", value: 8, color: "#dc2626" },
];

export const alerts = [
  { type: "danger", title: "Overdue milestone: GAO-2025-001", sub: "Due 2 days ago – Vaccine Oversight Review", when: "2 days ago" },
  { type: "warn", title: "Annual update due: OIG-2026-006", sub: "Due in 3 days – Management Decision", when: "1 day ago" },
  { type: "info", title: "Pending review: New study intake", sub: "GAO-2026-015", when: "1 day ago" },
  { type: "ok", title: "Recommendation closed", sub: "GAO-2024-012", when: "2 days ago" },
  { type: "mail", title: "New correspondence received", sub: "From CBER – GAO-2025-003", when: "3 days ago" },
];

export const quickLinks = [
  { label: "Create Study", icon: "FileAddOutlined" },
  { label: "Generate AI Summary", icon: "BulbOutlined" },
  { label: "Export Data", icon: "DownloadOutlined" },
  { label: "Saved Views", icon: "BookOutlined" },
  { label: "Search", icon: "SearchOutlined" },
  { label: "Help & FAQ", icon: "QuestionCircleOutlined" },
];
