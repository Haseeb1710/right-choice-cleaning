import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ServicesChecklist.css'

const checklistData = {
  'Kitchen': [
    { task: 'Clean cobwebs from lights & sills',       standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean & wipe countertops',                standard: true,  deep: true,  moveIn: true  },
    { task: 'Dust all lights & ceiling fans',          standard: true,  deep: true,  moveIn: true  },
    { task: 'Take out the trash',                      standard: true,  deep: true,  moveIn: true  },
    { task: 'Dust windows, sills & ledges',            standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean table & chairs',                    standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean inside/outside of microwave',       standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean stove burners & stovetop',          standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean & dry sink, counters, soap dish',   standard: true,  deep: true,  moveIn: true  },
    { task: 'Sweep & mop floors',                      standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean front of cabinets & handles',       standard: false, deep: true,  moveIn: true  },
    { task: 'Clean oven hood vent',                    standard: false, deep: true,  moveIn: true  },
    { task: 'Wipe window sills and frames',            standard: false, deep: true,  moveIn: true  },
    { task: 'Doors & door frames dusted',              standard: false, deep: true,  moveIn: true  },
    { task: 'Clean inside oven',                       standard: false, deep: false, moveIn: true  },
    { task: 'Clean inside cabinets & drawers',         standard: false, deep: false, moveIn: true  },
  ],
  'Bathrooms': [
    { task: 'Scrub & clean toilets',                   standard: true,  deep: true,  moveIn: true  },
    { task: 'Scrub & clean showers and tubs',          standard: true,  deep: true,  moveIn: true  },
    { task: 'Scrub & clean sinks and counters',        standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean mirrors and chrome fixtures',       standard: true,  deep: true,  moveIn: true  },
    { task: 'Sweep and mop floors',                    standard: true,  deep: true,  moveIn: true  },
    { task: 'Dust/wipe window sills & ledges',         standard: true,  deep: true,  moveIn: true  },
    { task: 'Cabinet fronts cleaned',                  standard: false, deep: true,  moveIn: true  },
    { task: 'Doors & door frames wiped',               standard: false, deep: true,  moveIn: true  },
    { task: 'Tile grout scrubbed',                     standard: false, deep: true,  moveIn: true  },
    { task: 'Dust & wipe baseboards',                  standard: false, deep: true,  moveIn: true  },
    { task: 'Clean inside cabinets',                   standard: false, deep: false, moveIn: true  },
    { task: 'Dust & wipe blinds',                      standard: false, deep: false, moveIn: true  },
    { task: 'Clean inside medicine cabinet',           standard: false, deep: false, moveIn: true  },
  ],
  'Bedrooms & Common Rooms': [
    { task: 'Clean cobwebs & dust shelves',            standard: true,  deep: true,  moveIn: true  },
    { task: 'Dust ceiling fan & blades',               standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean & buff mirrors',                    standard: true,  deep: true,  moveIn: true  },
    { task: 'Dust furniture, lamps & shades',          standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean window sills & frames',             standard: true,  deep: true,  moveIn: true  },
    { task: 'Vacuum / mop floors',                     standard: true,  deep: true,  moveIn: true  },
    { task: 'Make beds & change sheets',               standard: true,  deep: true,  moveIn: true  },
    { task: 'Clean light switches & door knobs',       standard: true,  deep: true,  moveIn: true  },
    { task: 'Tidy area, fold blankets',                standard: true,  deep: true,  moveIn: true  },
    { task: 'Empty garbage',                           standard: true,  deep: true,  moveIn: true  },
    { task: 'Doors & door frames wiped',               standard: false, deep: true,  moveIn: true  },
    { task: 'Dust & wipe baseboards',                  standard: false, deep: true,  moveIn: true  },
    { task: 'Clean closet area',                       standard: false, deep: false, moveIn: true  },
    { task: 'Dust & wipe blinds',                      standard: false, deep: false, moveIn: true  },
  ],
}

const ROOM_ICONS = {
  'Kitchen':                  'fa-utensils',
  'Bathrooms':                'fa-shower',
  'Bedrooms & Common Rooms':  'fa-bed',
}

function AccordionItem({ title, tasks, isOpen, onClick }) {
  return (
    <div className={`checklist-accordion ${isOpen ? 'open' : ''}`}>
      <button className="accordion-trigger" onClick={onClick}>
        <div className="accordion-trigger-left">
          <div className="accordion-icon">
            <i className={`fa-solid ${ROOM_ICONS[title]}`}></i>
          </div>
          <span>{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="accordion-chevron"
        >
          <i className="fa-solid fa-chevron-down"></i>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="accordion-body-wrap"
          >
            <div className="accordion-body">
              <div className="checklist-table-wrap">
                <table className="checklist-table">
                  <thead>
                    <tr>
                      <th className="col-task">What's Included</th>
                      <th className="col-type">
                        <span className="type-badge standard">Standard</span>
                      </th>
                      <th className="col-type">
                        <span className="type-badge deep">Deep</span>
                      </th>
                      <th className="col-type">
                        <span className="type-badge movein">Move In/Out</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((item, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                        <td className="task-name">
                          <i className="fa-solid fa-broom task-icon"></i>
                          {item.task}
                        </td>
                        <td className="task-check">
                          {item.standard
                            ? <span className="check yes"><i className="fa-solid fa-check"></i></span>
                            : <span className="check no"><i className="fa-solid fa-xmark"></i></span>}
                        </td>
                        <td className="task-check">
                          {item.deep
                            ? <span className="check yes"><i className="fa-solid fa-check"></i></span>
                            : <span className="check no"><i className="fa-solid fa-xmark"></i></span>}
                        </td>
                        <td className="task-check">
                          {item.moveIn
                            ? <span className="check yes"><i className="fa-solid fa-check"></i></span>
                            : <span className="check no"><i className="fa-solid fa-xmark"></i></span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicesChecklist() {
  const [openCategory, setOpenCategory] = useState('Kitchen')

  return (
    <section id="checklist" className="checklist-section bg-off-white">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">What's Included</span>
          <h2 className="section-title">Services <span>Checklist</span></h2>
          <div className="gold-line"></div>
          <p className="section-sub">
            See exactly what's included in each of our cleaning packages — complete transparency, every time.
          </p>
        </div>

        {/* Package legend */}
        <div className="checklist-legend">
          <div className="legend-item">
            <span className="type-badge standard">Standard</span>
            <span>Regular recurring clean</span>
          </div>
          <div className="legend-item">
            <span className="type-badge deep">Deep</span>
            <span>Initial or deep clean</span>
          </div>
          <div className="legend-item">
            <span className="type-badge movein">Move In/Out</span>
            <span>Full property clean</span>
          </div>
        </div>

        {/* Accordion */}
        <div className="checklist-accordions">
          {Object.entries(checklistData).map(([category, tasks]) => (
            <AccordionItem
              key={category}
              title={category}
              tasks={tasks}
              isOpen={openCategory === category}
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="checklist-cta text-center">
          <p>Ready to experience a truly thorough clean?</p>
          <a href="#booking" className="btn btn-gold" id="checklist-book-btn">
            <i className="fa-solid fa-calendar-check"></i>
            <span>Book Your Clean Today</span>
          </a>
        </div>
      </div>
    </section>
  )
}
