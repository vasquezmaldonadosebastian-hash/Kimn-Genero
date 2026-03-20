// TypeScript interfaces

interface Indicator {
    // Add properties related to Indicator based on KIMN-Género specifications.
    id: number;
    name: string;
    description: string;
    // other properties...
}

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface GlossaryTerm {
    term: string;
    definition: string;
}

interface Dashboard {
    widgets: string[];
    refreshRate: number;
}

interface User {
    id: number;
    username: string;
    email: string;
}

interface LoginResponse {
    token: string;
    user: User;
}

interface ApiResponse<T> {
    data: T;
    status: string;
    message?: string;
}

interface IndicatorFilterCriteria {
    category: string;
    year: number;
}

interface SearchResult {
    results: any[];
    totalResults: number;
}

interface Notification {
    id: number;
    message: string;
    read: boolean;
}

interface DataAlert {
    threshold: number;
    message: string;
}

interface CardProps {
    title: string;
    content: string;
}

interface ModalProps {
    title: string;
    isOpen: boolean;
}

interface ButtonProps {
    label: string;
    onClick: () => void;
}

interface LoadingState {
    isLoading: boolean;
    message?: string;
}

interface AppState {
    user: User;
    loading: LoadingState;
    notifications: Notification[];
}
