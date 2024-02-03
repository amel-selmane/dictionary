import React, { MouseEventHandler } from "react";

type SynonymsBlockProps = {
    synonyms: string[];
    onClick: MouseEventHandler<HTMLButtonElement>;
    className: string;
};

const SynonymsBlock = ({ synonyms, onClick, className }: SynonymsBlockProps) =>
    !!synonyms.length && (
        <div className={`flex gap-x-6 ${className}`}>
            <h3 className="text-mid-grey">Synonym(s)</h3>
            <span className="font-bold text-custom-purple">
                {synonyms.map((synonym, j) => (
                    <React.Fragment key={j}>
                        <button type="button" onClick={onClick}>
                            {synonym}
                        </button>
                        {j < synonyms.length - 1 && ", "}
                    </React.Fragment>
                ))}
            </span>
        </div>
    );

export default SynonymsBlock;
