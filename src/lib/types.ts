export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export interface Agency {
  id: string;
  name: string;
  whiteLabelDomain?: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  agencyId: string;
  email: string;
  role: 'owner' | 'manager' | 'client';
  status: 'active' | 'inactive' | 'pending';
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Client {
  id: string;
  agencyId: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectStageStatus = 'pending' | 'in_progress' | 'completed' | 'on_hold';

export interface ProjectStage {
  id: string;
  name: string;
  status: ProjectStageStatus;
  order: number;
  startDate?: Date;
  endDate?: Date;
}

export type ProjectPriority = 'low' | 'medium' | 'high';
export type ProjectStatus = 'active' | 'archived' | 'completed';

export interface Project {
  id: string;
  agencyId: string;
  clientId: string;
  name: string;
  description: string;
  priority: ProjectPriority;
  status: ProjectStatus;
  stages: ProjectStage[];
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type DeliverableStatus = 'draft' | 'in_review' | 'approved' | 'revisions_requested' | 'final';

export interface Deliverable {
  id: string;
  projectId: string;
  stageId: string;
  name: string;
  description?: string;
  fileUrl: string;
  fileName: string;
  fileType: string;
  status: DeliverableStatus;
  uploadedAt: Date;
  reviewedAt?: Date;
  approvedAt?: Date;
  comments: DeliverableComment[];
}

export interface DeliverableComment {
  id: string;
  deliverableId: string;
  userId: string;
  userName: string;
  comment: string;
  createdAt: Date;
}

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  id: string;
  agencyId: string;
  clientId: string;
  projectId?: string;
  invoiceNumber: string;
  issueDate: Date;
  dueDate: Date;
  status: InvoiceStatus;
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
  currency: string;
  paidDate?: Date;
  paymentLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MessageType = 'text' | 'file';

export interface Message {
  id: string;
  projectId: string;
  senderId: string;
  senderName: string;
  content: string;
  type: MessageType;
  fileUrl?: string;
  fileName?: string;
  createdAt: Date;
  readBy: string[]; // User IDs who have read the message
}

export type ActivityType = 'project_created' | 'deliverable_uploaded' | 'deliverable_status_changed' | 'invoice_sent' | 'invoice_paid' | 'message_sent' | 'login';

export interface ActivityLog {
  id: string;
  agencyId: string;
  projectId?: string;
  clientId?: string;
  type: ActivityType;
  title: string;
  description?: string;
  actorId: string;
  actorName: string;
  timestamp: Date;
  status?: string;
}