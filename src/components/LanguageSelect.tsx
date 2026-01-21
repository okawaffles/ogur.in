import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {useTranslation} from "react-i18next";

export default function LanguageSelect() {
    const {t} = useTranslation();

    return(
        <>
            <div className={"flex justify-end"}>
                <Menu>
                    <MenuButton className={"border-2 border-gray-500 rounded-lg m-4 p-2 text-white bg-gray-700"}>{t('language.selected')}</MenuButton>
                    <MenuItems anchor={"bottom end"} className={"bg-gray-700 text-white border-gray-500 border-2 rounded-lg p-2 cursor-pointer"}>
                        <MenuItem>
                            <p onClick={() => {
                                localStorage.setItem('i18nextLng', 'en');
                                location.reload();
                            }} className={"hover:text-blue-500 transition-colors ease-in-out"}>{t('language.english')}</p>
                        </MenuItem>
                        <MenuItem>
                            <p onClick={() => {
                                localStorage.setItem('i18nextLng', 'es');
                                location.reload();
                            }} className={"hover:text-blue-500 transition-colors ease-in-out"}>{t('language.spanish')}</p>
                        </MenuItem>
                        <MenuItem>
                            <p onClick={() => {
                                localStorage.setItem('i18nextLng', 'lolcat');
                                location.reload();
                            }} className={"hover:text-blue-500 transition-colors ease-in-out"}>{t('language.lolcat')}</p>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </>
    )
}