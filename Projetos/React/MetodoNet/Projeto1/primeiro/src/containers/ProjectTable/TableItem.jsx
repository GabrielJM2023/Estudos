import React from 'react'
import { FaPencilRuler } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from 'prop-types'
import "./styles.css"

function TableItem({ name, description, value }) {
  return (
    <div className="row table-line">
      <div className="col-7 description-colunm">
        <h3>
          {name}
        </h3>
        <p>{description}</p>
      </div>
      <div className="col-3 value-colunm">
        <span>{value}</span>
      </div>
      <div className="col-2 action-colunm">
        <FaPencilRuler onClick={() => console.log("cliquei para editar")} />
        <FaRegTrashAlt onClick={() => console.log("cliquei para remover")} />
      </div>
    </div>
  )
}

TableItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default TableItem
