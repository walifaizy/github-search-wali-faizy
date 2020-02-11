import React from 'react';
import SearchScreen from '../components/searchContainer/searchContainer';

class SearchPage extends React.PureComponent {
    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <SearchScreen />
            </div>
        );
    }
}

export default SearchPage;
