import React from 'react';
import HeaderParametersFilter from './HeaderParametersFilter';

const TrendingFilter = () => {
    return (
        <details className="description__filters__item">
            <HeaderParametersFilter title={'TRENDING NOW'} />
            <div className="description__filters__item-show">
                <form action="#">
                    <label><input type="checkbox" name="trending1" id="trending1" />Sweatshirt</label>
                    <label><input type="checkbox" name="trending2" id="trending2" />Pullover</label>
                    <label><input type="checkbox" name="trending3" id="trending3" />Sweater</label>
                    <label><input type="checkbox" name="trending4" id="trending4" />Hoodies</label>
                    <label><input type="checkbox" name="trending5" id="trending5" />Longsleeve</label>
                    <label><input type="checkbox" name="trending5" id="trending5" />Crop Top</label>
                    <label><input type="checkbox" name="trending5" id="trending5" />Park</label>
                    <label><input type="checkbox" name="trending5" id="trending5" />Bomber</label>
                </form>
            </div>
        </details>
    );
}

export default TrendingFilter;
