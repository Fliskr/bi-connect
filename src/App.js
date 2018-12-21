import React, {PureComponent} from 'react';
import './App.css';
import priceList from './price.json';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Map from './map.png';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ['Главная', 'Прайс', 'Контакты'],
            tab: 'Главная'
        };
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <div className='header-row'>
                        <div className='logo'>
                            <div className='logo-image'/>
                            <div className='logo-title'>
                                Электронные компоненты и электротовары
                            </div>
                        </div>
                        <div className="page-title">БИ-СВЯЗЬ</div>
                        <div className='contacts'>
                            <div className='contacts-city'>г. Санкт-Петербург</div>
                            <div className='contacts-working-hours'>
                                Режим работы:
                                <div className='contacts-working-hour'>
                                    Пн-Пт с 10.00 до 17.00
                                </div>
                            </div>
                            <div className='contacts-phones'>
                                Телефоны:
                                <a href='tel:+7 (812) 552-42-79' className='contacts-phone'>
                                    <i className='fa fa-phone'/>
                                    +7 (812) 552-42-79
                                </a>
                                <a href='tel:+7 (931) 270-999-5' className='contacts-phone'>
                                    <i className='fa fa-phone'/>
                                    +7 (931) 270-999-5
                                </a>
                            </div>
                            <div className='contacts-phones'>
                                Электронная почта для заказов:
                                <a href='mailto:bi_sviaz@mail.ru' className='contacts-phone'>
                                    <i className='fa fa-envelope'/>
                                    bi_sviaz@mail.ru
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="menu">
                    {this.state.tabs.map(item => (
                            <div className={`menu-item ${item === this.state.tab ? 'menu-item-active' : ''}`}
                                 onClick={() => this.setState({tab: item})}>{item}</div>
                        )
                    )}
                </div>
                {this.state.tab === 'Главная' &&
                <div className="main-page">
                    <div className="main-page__title">ООО "БИ-СВЯЗЬ"</div>
                    <div className="main-page__text">
                        <p>Компания начинала свою деятельность на рынке производства с 1996 года.</p>
                        <p>Головной офис компании находится в городе Санкт-Петербург.</p>
                        <br/>
                        <p>Компания специализируется на ремонте теле-коммуникационного оборудования и устройств связи.
                        </p>
                        <p>Компания на постоянной основе сотрудничается с РТПЦ России и филиалами Ростелеком.
                        </p>
                    </div>
                    <div className="main-page__subtitle">Миссия компании</div>
                    <div className="main-page__text">
                        <p>Обеспечить рынок лучшими по функциональности и стоимости продуктами в области
                            теле-коммуникационного оборудования.</p>
                    </div>
                    <div className="main-page__subtitle">Наша задача</div>
                    <div className="main-page__text">
                        <p>Поставка качественных комплектующих и профессионалная помощь в подборе аналогов.</p>
                        <p>Гарантия соответствия продукции высоким мировым стандартам</p>
                        <p>Поставка продукции ведущих производителей</p>
                        <p>Индивидуальный подход к потребностям каждого клиента</p>
                    </div>
                    <div className="main-page__subtitle">О продукции</div>
                    <div className="main-page__text">
                        <p>Антенны, вентиляторы, резисторы, транзисторы, конденсаторы, микросхемы, СВЧ транзисторы,
                            разъемы, материалы и оборудование.</p>
                    </div>
                    <div className="main-page__subtitle">Перспективы и планы</div>
                    <div className="main-page__text">
                        <p>На данный момент компания работает по России с 23 городами.</p>
                        <p>Ведётся работа по расширению географии поставок.</p>
                    </div>
                </div>
                }
                {this.state.tab === 'Прайс' && <div className="price-page">
                    <ReactTable
                        data={priceList}
                        className="-striped -highlight"
                        defaultPageSize={20}
                        style={{
                            height: '600px',
                            width: '900px'
                        }}
                        filterAll={true}
                        previousText={'Предыдущая страница'}
                        nextText={'Следующая страница'}
                        rowsText={'страниц'}
                        pageText={'Страница'}
                        ofText={'из'}
                        filterable
                        defaultFilterMethod={
                            (filter, row) => row[filter.id].toLowerCase()
                                                           .includes(filter.value.toLowerCase())
                        }
                        columns={[
                            {
                                Header: 'Наименование',
                                accessor: 'name',
                                minWidth: 250,
                                Cell: ({value}) => (<div style={{padding: '5px 15px'}}>{value}</div>)
                            }, {
                                Header: 'Единица измерения',
                                accessor: 'currency',
                                minWidth: 100,
                                Cell: ({value}) => (<div style={{padding: '5px 15px'}}>{value}</div>)
                            }, {
                                Header: 'Цена с НДС/руб',
                                accessor: 'price',
                                minWidth: 100,
                                Cell: ({value}) => (<div style={{padding: '5px 15px'}}>{value}</div>)
                            }
                        ]}
                    />
                </div>}
                {this.state.tab === 'Контакты' && <div className="contacts-page">
                    <div className="contacts-page__title">ООО "БИ-СВЯЗЬ"</div>
                    <div className="contacts-page__text">Адрес: 194017, город Санкт-Петербург, проспект Тореза, дом
                        98/1, офис 219 (2 этаж)
                    </div>
                    <div className="contacts-page__text">
                        Телефон:
                        <a href="tel:">
                            <i className="fa fa-phone"/> 8 (931) 270-999-5
                        </a>
                    </div>
                    <div className="contacts-page__text">
                        Факс:
                        <a href="tel:8-812-552-42-79">
                            <i className="fa fa-phone"/> 8 (812) 552-42-79
                        </a>
                    </div>
                    <div className="contacts-page__text">
                        Адрес электронной почты:
                        <a href="mailto:bi_sviaz@mail.ru">
                            <i className="fa fa-envelope"/>bi_sviaz@mail.ru
                        </a>
                    </div>
                </div>}
                <div className="contacts-map">
                    <a
                        target="_blank"
                        href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.335463%2C60.018967&z=17">
                        <img
                            width="600px"
                            height="300px"
                            src={Map}
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export default App;
