import React from 'react'

export default function MentorCard(props) {
    return (
        <div className="col-md-3 mb-5">
            <div class="card" style={{ width: "auto" }}>
                <img src="https://source.unsplash.com/random/?profile+photo" class="card-img-top" alt="profile" style={{ maxHeight: "15rem" }} />
                <div class="card-body">
                    <h5 class="card-title text-center">{props.name}</h5>
                    <p class="card-text text-center">{props.university}</p>
                </div>
            </div>
        </div>
    )
}
