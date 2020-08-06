import React, { useState } from "react"

const Filter = () => {
  const initValues = {
    category: "",
    title: "",
  }

  const [filterChange, saveFilterChange] = useState(false)
  const [filterObj, saveFilterObj] = useState(null)
  const { category, title } = filterObj
  const [change, saveChange] = useState(false)
  const [filterBar, saveFilterBar] = useState(false)
  useEffect(() => {
    if (change) {
      //setFilter(filterObj)
    }
    // checkFilterValues()
    // saveChange(false)
    // eslint-disable-next-line
  }, [filterObj])

  const onChangeValue = async e => {
    saveChange(true)

    saveFilterObj({
      ...filterObj,
      [e.target.name]: e.target.value,
    })
  }

  const cancelAction = e => {
    e.preventDefault()
    saveChange(true)
    saveFilterObj(initValues)
  }

  const checkFilterValues = () => {
    const keys = Object.keys(initValues)
    for (const key of keys) {
      if (initValues[key] !== filterObj[key]) {
        return saveFilterChange(true)
      }
    }

    saveFilterChange(false)
  }

  return (
    <aside className={`col_aside ${filterBar ? "active" : ""}`}>
      <div className="col_aside_inner">
        <div className="box-title">
          <h3>Filtrar entradas</h3>
        </div>
        <form>
          <div className="filterBy">
            <div className="field">
              <div className="select-small ">
                <div className="select-simple__container">
                  <select
                    name="category"
                    value={category}
                    onChange={onChangeValue}
                  >
                    <option value=""> Por categorias</option>
                    <option value="React"> React</option>
                    <option value="Firebase"> Firebase</option>
                    <option value="Node"> Node</option>
                    <option value="Express"> Express</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="filterBy">
            <div className="field">
              <input type="text" value={title} />
            </div>
          </div>
          <div className="filterBy">
            <button type="button" className="btn-medium btn-color-5 btn-size-3">
              Filtrar
            </button>
          </div>

          {filterChange && (
            <div className="filterBy">
              <button
                type="button"
                className="btn-medium btn-color-5 btn-size-3"
                onClick={cancelAction}
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </form>
      </div>
      <div
        className={`close-filter-bar `}
        onClick={() => saveFilterBar(!filterBar)}
      ></div>
    </aside>
  )
}

export default Filter
