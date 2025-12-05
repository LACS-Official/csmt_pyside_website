export interface DiskInfo {
  letter: string;
  fs: string;
  total: number;
  used: number;
  free: number;
  percent: number;
}

export interface NavItem {
  id: string;
  label: string;
  active?: boolean;
}

export interface SystemMetric {
  label: string;
  value: string;
  percent: number;
  color: string;
  subtext?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
