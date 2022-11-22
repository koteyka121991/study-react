import React from "react"

class ProfileStatus extends React.Component {

    state = {
        // условие для статуса 
        editeMode: false,
        status: this.props.status

    }
    // активируем инпут по двойному нажатию на статус
    activateEditeMode = () => {
        this.setState({
            editeMode: true
        });
        // forceUpdate стараемся не ипользовать, используем setState(). setState -ассинхронен
        // this.forceUpdate();
    }
    // деактивируем инпут 
    deactivateEditeMode = () => {
        this.setState({
            editeMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        // благодаря е мы узнаем новое значение
        // currentTarget содержит элемент, для которого было назначено событие
        this.setState(
            { status: e.currentTarget.value });
    }
    componentDidUpdate=(prevProps, prevState) => {
        // компонент жизненого цикла. Метод позволяет работать с DOM при обновлении компонента.
        // Также он подходит для выполнения таких сетевых запросов, которые выполняются 
        // на основании результата сравнения текущих пропсов с предыдущими. 
        // Если пропсы не изменились, новый запрос может и не требоваться.
        // обязательно прописываем условия, иначе будет ошибка 
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

console.log ("componentDidUpdate");
    }
    render() {
        return (
            <>
                {/* Если у нас выражение не! то отобразим это */}
                {!this.state.editeMode &&
                    <div>
                        {/* onDoubleClick обработчик события 2 нажатие  */}
                        {/* без bind не приходят свойста в activateEditeMode, убрала bind после обновления react script
                       метод bind, который позволяет зафиксировать this. */}
                       {/* this.props.status || "No status" условие отображается статус пришедший с сервера или no status (|| или) */}
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status || "No status"}</span>
                    </div>
                }
                {/* Если у нас выражение истинное то отобразим это( не стоит !- это не в js) */}
                {this.state.editeMode &&
                    <div>
                        {/* onBlur срабатывает когда фокус уходит из элимента 
                        autoFocus срабатываение авто флкуса в инпуте мигает палка в поле ввода*/}
                        {/* onchange (Дословно "На изменение") устанавливает и возвращает обработчик события */}
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditeMode} value={this.state.status} />
                    </div>
                }
            </>
        )
    }

}
export default ProfileStatus;