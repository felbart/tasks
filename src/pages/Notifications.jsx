import 'react';

// Componente de Cabeçalho
const Header = () => {
    return (
        <div style={styles.header}>
            <h1>Notificações</h1>
        </div>
    );
};

// Componente de Card de Notificação
// eslint-disable-next-line react/prop-types
const NotificationCard = ({ title, message }) => {
    return (
        <div style={styles.card}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

// Componente Principal de Notificações
const Notifications = () => {
    const notifications = [
        { title: 'Notificação 1', message: 'Esta é a mensagem da notificação 1' },
        { title: 'Notificação 2', message: 'Esta é a mensagem da notificação 2' },
        { title: 'Notificação 3', message: 'Esta é a mensagem da notificação 3' },
    ];

    return (
        <div style={styles.container}>
            <Header />
            <div style={styles.notificationsContainer}>
                {notifications.map((notification, index) => (
                    <NotificationCard
                        key={index}
                        title={notification.title}
                        message={notification.message}
                    />
                ))}
            </div>
        </div>
    );
};

// Estilos
const styles = {
    container: {
        padding: '20px',
    },
    header: {
        marginBottom: '20px',
    },
    notificationsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    card: {
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
};

export default Notifications;