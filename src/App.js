import React from 'react'

const tracks = [
  { id: '787 K:12', curves: ['curve blue', 'curve orange', 'curve violet'] },
  { id: '789 K:12', curves: ['curve green'] },
  { id: '1555 K:12', curves: ['curve blue', 'curve green'] },
  { id: '1555 K:12', curves: [] }
]

const treeItems = [
  'ТГП Когалымнефтегаз',
  'Тевлинско - Русскинское м.',
  'Объекты разработки',
  'Скважины',
  'Прочие скважины',
  'Кусты',
  'КНС'
]

const listItems = ['787 K:12', '879 K:12', '1555 K:12', '789 K:12']

function Track ({ track }) {
  return (
    <article className='track'>
      <header className='trackHead'>
        <span>{track.id}</span>
        <div className='trackActions'>
          <span>⚠</span>
          <span>↗</span>
          <span>🔖</span>
        </div>
      </header>
      <div className='trackMeta'>
        <span>Глубина (м)</span>
        <span>Перфорация</span>
        <span>Литология</span>
      </div>
      <div className='trackScale'>
        {Array.from({ length: 9 }).map((_, i) => <div key={i} className='dash' />)}
      </div>
      <div className='trackBody'>
        <div className='rod' />
        <div className='wellLabel'>БС102-3</div>
        <div className='curveArea'>
          {track.curves.map((curve) => <div className={curve} key={curve} />)}
        </div>
      </div>
    </article>
  )
}

export default function App () {
  return (
    <div className='screen'>
      <header className='header'>
        <div className='brand'>
          <div className='logo'>LK</div>
          <strong>АРМ РРМ</strong>
        </div>
        <div className='toolbar'>{Array.from({ length: 11 }).map((_, i) => <span key={i} className='icon' />)}</div>
        <div className='headerRight'>
          <button className='reportBtn'>Отчеты</button>
          <span className='link'>Настройки</span>
          <span className='link'>Выход</span>
        </div>
      </header>

      <div className='workspace'>
        <aside className='leftPanel'>
          <div className='panelTitle'>ИНФОРМАЦИОННОЕ ДЕРЕВО</div>
          <ul className='tree'>
            <li className='root'>Лукойл - Западная Сибирь</li>
            {treeItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className='panelTitle'>СПИСКИ</div>
          <ul className='list'>
            <li className='root'>Профайл 1 <span>4</span></li>
            {listItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>

        <main className='main'>
          <div className='subToolbar'>{Array.from({ length: 12 }).map((_, i) => <span key={i} className='subIcon' />)}</div>
          <section className='tracks'>{tracks.map((track) => <Track track={track} key={track.id + track.curves.length} />)}</section>
        </main>

        <aside className='rightPanel'>
          <div className='rightTitle'>сдвижки абс. отметок</div>
          <div className='placeholder'>
            <h3>Выберите скважину</h3>
            <p>Чтобы увидеть список ее смещений<br />или создать новое</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
