import React from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';

const LogoutConfirmDialog = ({ error, loading, modalClose, logout }) => (
    <>
        <h2 className="mb-3">Logging out?</h2>
        <p className="text-black-50">Thanks for stopping by. See you again soon!</p>

        {/** show error */}
        {error && (
            <Alert variant="danger" style={{ marginBottom: '2rem' }}>
                {error.message}
            </Alert>
        )}

        <div className="d-flex">
            <Button
                className="border border-primary btn-white w-100 mr-2 shadow-none"
                onClick={modalClose}
            >
                Cancel
            </Button>
            <Button
                variant="primary"
                className="w-100 ml-2 shadow-none"
                disabled={loading}
                onClick={logout}
            >
                {loading ? (
                    <Spinner as="span" role="status" animation="border" size="sm" />
                ) : (
                    'LOG OUT'
                )}
            </Button>
        </div>
    </>
);

export default LogoutConfirmDialog;
