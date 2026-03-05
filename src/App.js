import React from 'react'

const kpiData = [
  { title: 'Активные заявки', value: '128', trend: '+12% за неделю' },
  { title: 'В обработке', value: '46', trend: 'Среднее время 2ч 14м' },
  { title: 'Просрочено SLA', value: '7', trend: '-3 за сутки' },
  { title: 'Новые за сегодня', value: '23', trend: 'Пик в 11:00' }
]

const requests = [
  { id: 'REQ-1042', client: 'ООО Альфа', type: 'Подключение', status: 'В работе', date: '05.03.2026', owner: 'Иванов И.И.' },
  { id: 'REQ-1039', client: 'ИП Смирнова', type: 'Смена тарифа', status: 'Ожидает', date: '05.03.2026', owner: 'Петров А.А.' },
  { id: 'REQ-1034', client: 'АО Бета', type: 'Техподдержка', status: 'Просрочено', date: '04.03.2026', owner: 'Сидоров В.В.' },
  { id: 'REQ-1027', client: 'ООО Гамма', type: 'Подключение', status: 'Закрыто', date: '03.03.2026', owner: 'Кузнецова Н.Н.' }
]

const statusClass = {
  'В работе': 'badge work',
  Ожидает: 'badge wait',
  Просрочено: 'badge late',
  Закрыто: 'badge done'
}

export default function App () {
  return (
    <main className='layout'>
      <header className='topbar'>
        <div>
          <p className='eyebrow'>АРМ РРМ / Модуль 4</p>
          <h1>Экран мониторинга заявок</h1>
        </div>
        <button className='primary'>+ Создать заявку</button>
      </header>

      <section className='kpiGrid'>
        {kpiData.map((kpi) => (
          <article className='kpiCard' key={kpi.title}>
            <p>{kpi.title}</p>
            <h2>{kpi.value}</h2>
            <span>{kpi.trend}</span>
          </article>
        ))}
      </section>

      <section className='panel'>
        <div className='panelHeader'>
          <h3>Реестр заявок</h3>
          <div className='filters'>
            <button className='chip active'>Все</button>
            <button className='chip'>В работе</button>
            <button className='chip'>Ожидают</button>
            <button className='chip'>Просрочены</button>
          </div>
        </div>

        <div className='tableWrap'>
          <table>
            <thead>
              <tr>
                <th>№ заявки</th>
                <th>Клиент</th>
                <th>Тип</th>
                <th>Статус</th>
                <th>Дата</th>
                <th>Ответственный</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.client}</td>
                  <td>{row.type}</td>
                  <td><span className={statusClass[row.status]}>{row.status}</span></td>
                  <td>{row.date}</td>
                  <td>{row.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
