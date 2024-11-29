type Props =
    {
        value: boolean;
    }

const checkBox = (props: Props) => {

    return (
        <input type="checkbox"
            checked={props} disabled />
    );
};

export default checkBox;