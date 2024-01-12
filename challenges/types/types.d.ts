export interface NewsletterContentProps {
  data: { title: string }[];
}

export interface EmailInputProps {
  email: string;
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

export interface SubscribeButtonProps {
  error: boolean;
  handleClick: () => void;
}
