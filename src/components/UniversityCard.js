import React from 'react'

export default function UniversityCard(props) {
    return (
        <div className="col-md-3 mb-3">
            <div class="card" style={{ width: "auto", height: "5rem" }}>
                <div class="card-body">
                    <h5 class="card-title text-center">{props.name}</h5>
                </div>
            </div>
        </div>
    )
}
