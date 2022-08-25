import { infoView } from "../types/info-view";

export default function InfoCard({title, text}: infoView) {
    return (
        <>
            <div className="wrap-collabsible">
                <input id="collapsible" className="toggle" type="checkbox" />
                <label htmlFor="collapsible" className="lbl-toggle">{title}</label>
                <div className="collapsible-content">
                    <div className="content-inner">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
