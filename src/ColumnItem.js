import React from 'react';
import './style.scss';

class Input extends React.PureComponent {
    onChange = e => {
        let { onChange, indexRow, name, field } = this.props;
        console.log('this.props', this.props);
        onChange(name, e.target.value, indexRow, field);
    };

    render() {
        let { name } = this.props;
        return (
            <input
                className="input"
                name={name}
                type="text"
                onChange={this.onChange}
            />
        );
    }
}

export default class ColumnItem extends React.Component {
    render() {
        let { data, fakeData, onChange } = this.props;

        return data.map((item, index) => {
            return (
                <div className="table__detail" key={index}>
                    {fakeData.map((itemName, i) => (
                        <Input
                            key={i}
                            name={itemName}
                            onChange={onChange}
                            indexRow={index}
                            field={itemName}
                        />
                    ))}
                </div>
            );
        });
    }
}
