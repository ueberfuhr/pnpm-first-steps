export function Button(props: any) {
    return <button onClick={() => props.onClick()}>Shared UI: {props.children}</button>;
}
export default Button;
