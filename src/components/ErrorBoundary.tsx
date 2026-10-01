import { Component, ErrorInfo, ReactNode } from 'react';
import Error from './Error';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('Erreur capturée par ErrorBoundary :', error, info);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Error
                    title="Une erreur inattendue est survenue"
                    message="L'application a rencontré un problème. Vous pouvez recharger la page pour réessayer."
                    details={this.state.error?.message ?? null}
                    onRetry={this.handleReset}
                    fullScreen
                />
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;