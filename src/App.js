import React from 'react';
import ColumnItem from './ColumnItem';
import './style.scss';

const addNewRow = (amount, currentData) => {
    console.log('currentData', currentData);
    if (amount > currentData.length) {
        return currentData.push({
            id: amount,
            name: `row ${amount}`,
            item: '',
            descriptiom: '',
            qty: '',
            unitPrice: '',
            taxRate: '',
            total: ''
        });
    } else {
        return currentData.pop();
    }
};

const fakeData = [
    'item',
    'descriptrion',
    'qty',
    'unit price',
    'tax rate',
    'amount GDP'
];

const TitleTatble = props => {
    let { data } = props;
    return data.map((name, index) => {
        return (
            <div key={index} className="row">
                {name}
            </div>
        );
    });
};

export default class App extends React.PureComponent {
    state = {
        array: [],
        amount: 1
    };

    onChange = (name, value, indexRow, field) => {
        let { array } = this.state;
        let copyData = Object.assign([], array);
        copyData[indexRow][field] = value;
        console.log('copyData', copyData);
    };

    onPlusRow = e => {
        let { amount } = this.state;
        e.preventDefault();
        // let a = 0;
        this.setState({
            amount: amount + 1
        });
    };

    render() {
        let { amount, array } = this.state;

        addNewRow(amount, array);

        console.log('this.state', this.state);
        return (
            <>
                <div className="table">
                    <div className="table__detail">
                        <TitleTatble data={fakeData} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <ColumnItem
                                fakeData={fakeData}
                                data={array}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                </div>
                <button onClick={this.onPlusRow}>add</button>
            </>
        );
    }
}

//  App;
