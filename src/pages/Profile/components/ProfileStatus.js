import React from "react"

class ProfileStatus extends React.Component {
    state = {
        // условие для статуса 
        editeMode: false,
    }
// активируем инпут по двойному нажатию на статус
    activateEditeMode = () => { this.setState({
            editeMode: true
        });
        // forceUpdate стараемся не ипользовать, используем setState(). setState -ассинхронен
        // this.forceUpdate();
    }
    // деактивируем инпут 
    deactivateEditeMode = () => { this.setState({
        editeMode: false
    });

}
    render() {
        return (
            <>
                {/* Если у нас выражение не! то отобразим это */}
                {!this.state.editeMode &&
                    <div>
                        {/* onDoubleClick обработчик события 2 нажатие  */}
                        {/* без bind не приходят свойста в activateEditeMode
                       метод bind, который позволяет зафиксировать this. */}
                        <span onDoubleClick={this.activateEditeMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {/* Если у нас выражение истинное то отобразим это( не стоит !- это не в js) */}
                {this.state.editeMode &&
                    <div>
                        {/* onBlur срабатывает когда фокус уходит из элимента 
                        autoFocus срабатываение авто флкуса в инпуте мигает палка в поле ввода*/}
                        <input autoFocus onBlur={this.deactivateEditeMode.bind(this)} value={this.props.status} />
                    </div>
                }
            </>
        )
    }

}
export default ProfileStatus;