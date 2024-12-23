import { createContext, useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Snackbar } from "@mui/material";

const AppCtx = createContext(null);

const AppProvider = ({ children }) => {
    const { t: translate, i18n } = useTranslation();
    const timeoutDuration = 6000;

    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("");
    const [alertVariant, setAlertVariant] = useState(null);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    }

    const showSnackMessage = (message) => {
        setSnackMessage(message);
        setSnackOpen(true);
    }

    const showAlertMessage = (message, severity, variant) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setAlertVariant(variant);

        setTimeout(() => {
            setAlertMessage("");
        }, timeoutDuration);
    }

    const handleClose = () => {
        setSnackMessage("");
        setSnackOpen(false);
    }

    const sharedState = {
        changeLanguage,
        showSnackMessage,
        showAlertMessage,
        translate
    };

    useEffect(() => {
        const storeLanguage = localStorage.getItem("language");

        if (storeLanguage) {
            changeLanguage(storeLanguage);
        } else {
            const navLang = navigator.language.split("-")[0];
            changeLanguage(navLang);
        }
    }, [])

    return (
        <div className="app-bg">
            <AppCtx.Provider value={sharedState}>
                {children}
            </AppCtx.Provider>
            <Snackbar onClose={handleClose} open={snackOpen} message={snackMessage} autoHideDuration={timeoutDuration} />
            {/* {
                alertMessage ? 
                <Grid container={true} sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    padding: 2
                }}>
                    <Grid item={true} size={{ xs: 12 }}>
                        <Alert variant={alertVariant} severity={alertSeverity}>{alertMessage}</Alert>
                    </Grid> 
                </Grid>
                : null
            } */}
        </div>
    )
}

export const useAppContext = () => {
    const context = useContext(AppCtx);
    if (context === null) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default AppProvider;