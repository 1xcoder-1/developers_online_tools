import React from "react";
import {Menubar as PrimeMenubar} from 'primereact/menubar';
import {Button} from "primereact/button";
import {MenubarPropsType} from "../../types/menubar";

const Menubar: React.FC<MenubarPropsType> = ({model, onLogoClick, onGitHubClick}) => {

    const start = <Button icon="pi pi-code" type="button" className="logo p-button-rounded p-button-outlined" onClick={onLogoClick}/>;

    const end = <Button label="GitHub" type="button" icon="pi pi-github"
                        className="p-button-rounded p-button-outlined"
                        data-testid="GitHub"
                        onClick={onGitHubClick}/>;

    return <PrimeMenubar className="p-mb-6 p-shadow-3" model={model} start={start} end={end} />
}

export default Menubar;