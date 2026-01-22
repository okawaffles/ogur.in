import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";


i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs: ["en", "es", "lolcat"],
        fallbackLng: "en",
        debug: true,
        resources: {
            en: {
                translation: {
                    home: {
                        instruction: "Please enter your link",
                        submit: "Tamamo-ize it!",
                        comingsoon: "ogur.in is still in development! Come back soon!"
                    },
                    url: {
                        placeholder: "https://example.com"
                    },
                    modal: {
                        link: {
                            title: "Here's your link!",
                            copy: "Copy and Close",
                        },
                        close: "Close",
                        info: {
                            title: "Info"
                        }
                    },
                    transfer: {
                        headsup: "Heads up!",
                        info: "This link is bringing you to",
                        check: "You sure you wanna go?",
                        confirm: "Yup, go on!",
                        cancel: "Wait, nevermind!",
                        report: "Report abuse",
                        notfound: "Not Found",
                        back: "Back",
                        full_link: "Show full link",
                        modal: {
                            report: "Report this link",
                            reportSub: "Please verify you're human first.",
                            submit: "Submit Report",
                            full_link: "Full Link",
                        }
                    },
                    language: {
                        selected: '🇺🇸 English (US)',
                        english: '🇺🇸 English (US)',
                        spanish: '🇲🇽 Español (MX) [Spanish (MX)]',
                        lolcat: '😺 LOLCAT (Kingdom of Cats)'
                    },
                    error: {
                        badUrl: "Looks like that's a bad URL! Please check it and try again.",
                        turnstileFail: "Turnstile verification failed, please try again."
                    },
                    misc: {
                        affiliation: "Not affiliated with Cygames or Umamusume."
                    }
                }
            },
            es: {
                translation: {
                    home: {
                        instruction: "Por favor ingresa tu enlace",
                        submit: "Abreviar",
                        comingsoon: "ogur.in todavía está en desarrollo. ¡Por favor vuelve pronto!"
                    },
                    url: {
                        placeholder: "https://ejemplo.com"
                    },
                    modal: {
                        link: {
                            title: "Aquí está tu enlace",
                            copy: "Copiar y Cerrar",
                        },
                        close: "Cerrar",
                        info: {
                            title: "Información"
                        }
                    },
                    transfer: {
                        headsup: "Aviso de Reenviar",
                        info: "Este enlace te lleva a",
                        check: "¿Estás seguro de que quieres ir?",
                        confirm: "Sí, ¡vamos!",
                        cancel: "No, ¡no quiero ir!",
                        report: "Reportar abuso",
                        notfound: "Not Found",
                        back: "Cerrar",
                        full_link: "Mostrar enlace completo",
                        modal: {
                            report: "Reportar este enlace",
                            reportSub: "Por favor verifica que eres humano primero.",
                            submit: "Enviar Reporte",
                            full_link: "Enlace Completo",
                        }
                    },
                    language: {
                        selected: '🇲🇽 Español (MX)',
                        english: '🇺🇸 Inglés (EE.UU.) [English (US)]',
                        spanish: '🇲🇽 Español (MX)',
                        lolcat: '😺 LOLCAT (Kingdom of Cats)'
                    },
                    misc: {
                        affiliation: "No afiliado con Cygames o Umamusume."
                    }
                }
            },
            lolcat: {
                translation: {
                    home: {
                        instruction: "PLZ ENTER UR LINK",
                        submit: "MAKE KITTEN!",
                    },
                    url: {
                        placeholder: "https://lol.cat"
                    },
                    modal: {
                        link: {
                            title: "HERE IZ UR KITTEN LINK!",
                            copy: "COPY AN CLOZ",
                        },
                        close: "CLOZ",
                        info: {
                            title: "WAT DIS"
                        }
                    },
                    transfer: {
                        headsup: "HEDZ UP!",
                        info: "DIS LINK IZ BRINGIN U TO",
                        check: "R U SURE U WAN TO GO?",
                        confirm: "YAY, GO!",
                        cancel: "AHHH, NEVERMINDZ!",
                        report: "DIS IZ BAD LINKS!!!",
                        notfound: "DIS LINK IZ NOT REAL",
                        back: "GO BACK",
                        full_link: "SEE DA BIG LINK",
                        modal: {
                            report: "REPORT DIS LINK?",
                            reportSub: "U HAV TO VERIFY U R KITTY",
                            submit: "REPORT IT",
                            full_link: "DA BIG LINK",
                        }
                    },
                    language: {
                        selected: '😺 LOLCAT (KITTY KINDOM)',
                        english: '🇺🇸 English (US) [HUMAN SPEAK (US)]',
                        spanish: '🇲🇽 Español (MX) [LENGUAJE HUMANOS (MX)]',
                        lolcat: '😺 LOLCAT (Kingdom of Cats)'
                    },
                    error: {
                        badUrl: "DAT LINK IZ NOT GUD!!! PLZ FIX IT AN TRY AGAIN!",
                        turnstileFail: "CULD NOT VERIFY U R KITTY, PLZ TRY AGAIN!"
                    },
                    misc: {
                        affiliation: "DIS PLACE NOT BY CYGAMES OR PART OF UMAMUSUME!"
                    }
                }
            }
        }
    });