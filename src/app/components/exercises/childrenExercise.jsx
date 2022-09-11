import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <>
            <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumberChildren>
                <Component />
                <Component />
                <Component />
            </NumberChildren>
            </CollapseWrapper>
        </>
    );
};

const NumberChildren = ({ children }) => {
    return React.Children.map(children, (child, index) => (
        <>
            {index + 1}. {child}
        </>
    ));
};

NumberChildren.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
