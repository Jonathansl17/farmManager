// Base Icon component
const Icon = ({ children, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
)

export const Plant = (props) => (
  <Icon {...props}>
    <path d="M7 17.8C7 19.56 8.5 21 10.34 21H13.66C15.5 21 17 19.56 17 17.8V17" />
    <path d="M11.25 3C9.5 5 7 5.5 3 6.5C3 11.5 6 15.5 12 17" />
    <path d="M12.75 3C14.5 5 17 5.5 21 6.5C21 11.5 18 15.5 12 17" />
  </Icon>
)

export const Scissors = (props) => (
  <Icon {...props}>
    <path d="M6 9 L12 15 L18 9" />
    <path d="M6 15 L12 9 L18 15" />
  </Icon>
)

export const Truck = (props) => (
  <Icon {...props}>
    <path d="M1 3h15v13H1z" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </Icon>
)

export const DollarSign = (props) => (
  <Icon {...props}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </Icon>
)

export const Calendar = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </Icon>
)

export const MapPin = (props) => (
  <Icon {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
)

export const Ruler = (props) => (
  <Icon {...props}>
    <path d="M3 5v14" />
    <path d="M6 5v14" />
    <path d="M16 5v14" />
    <path d="M19 5v14" />
    <path d="M3 5h16" />
    <path d="M3 10h16" />
    <path d="M3 14h16" />
    <path d="M3 19h16" />
  </Icon>
)

export const Droplets = (props) => (
  <Icon {...props}>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </Icon>
)

export const Sun = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </Icon>
)

export const Sprout = (props) => (
  <Icon {...props}>
    <path d="M7 20h10" />
    <path d="M12 20v-9" />
    <path d="M9 9s0-3 3-3 3 3 3 3" />
    <path d="M9 6c0-1.7.3-3 3-3s3 1.3 3 3" />
  </Icon>
)

export const TrendingUp = (props) => (
  <Icon {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </Icon>
)

export const BarChart3 = (props) => (
  <Icon {...props}>
    <path d="M3 3v18h18" />
    <path d="M8 17V9" />
    <path d="M12 17V5" />
    <path d="M16 17v-5" />
  </Icon>
)

export const ShoppingBag = (props) => (
  <Icon {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </Icon>
)

export const Plus = (props) => (
  <Icon {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </Icon>
)

export const Edit = (props) => (
  <Icon {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </Icon>
)

export const Eye = (props) => (
  <Icon {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
)

export const Trash = (props) => (
  <Icon {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </Icon>
)

export const FileText = (props) => (
  <Icon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </Icon>
)

export const CheckCircle2 = (props) => (
  <Icon {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
)

export const CircleDashed = (props) => (
  <Icon {...props}>
    <path d="M8.56 3.69a9 9 0 0 0-2.92 1.95" />
    <path d="M3.69 8.56A9 9 0 0 0 3 12" />
    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
    <path d="M8.56 20.31A9 9 0 0 0 12 21" />
    <path d="M15.44 20.31a9 9 0 0 0 2.92-1.95" />
    <path d="M20.31 15.44A9 9 0 0 0 21 12" />
    <path d="M20.31 8.56a9 9 0 0 0-1.95-2.92" />
    <path d="M15.44 3.69A9 9 0 0 0 12 3" />
  </Icon>
)

export const Search = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Icon>
)
