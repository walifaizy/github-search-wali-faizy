import React from 'react';
import Styles from './styles';

const Pagination = props => {
    const { width, height } = props;
    return (
        <div>
            <div className="placeholder" style={{ width, height }}>
                <div className="moving" />
            </div>
            <style jsx>{Styles}</style>
        </div>
    );
};

export default Pagination;
