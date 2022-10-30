interface ButttonProps {
    title: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({handleClick, title, ...rest} : ButttonProps) => {
    return(
        <button className="button" onClick={handleClick}>
        {title}
      </button>
    )
}