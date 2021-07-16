import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { H2, Text } from 'styled/custom/components';
import Button, { ButtonGroup } from 'components/UI/Button/Button';

const LogoutConfirmDialog = ({ error, loading, modalClose, logout }) => (
    <>
        <H2>Logging out?</H2>
        <Text variant="secondary">Thanks for stopping by. See you again soon!</Text>

        {/** show error */}
        {error && (
            <Alert variant="danger" style={{ marginBottom: '2rem' }}>
                {error.message}
            </Alert>
        )}

        <ButtonGroup>
            <Button width="100" onClick={modalClose}>
                Cancel
            </Button>
            <Button width="100" variant="outline-dark" disabled={loading} onClick={logout}>
                {loading ? (
                    <Spinner as="span" role="status" animation="border" size="sm" />
                ) : (
                    'LOG OUT'
                )}
            </Button>
        </ButtonGroup>
    </>
);

export default LogoutConfirmDialog;
