import React, { Component } from 'react';
import FamilyTree from "./familytree.js";  
import { menuUI } from './familytree.js';

        export default class Chart extends Component {

            constructor(props) {
                super(props);
                this.divRef = React.createRef();
            }

            shouldComponentUpdate() {
                return false;
            }

            componentDidMount() {
                this.family = new FamilyTree (this.divRef.current , {
                    nodes: this.props.nodes,
                    searchFields: ["name", "familyId"],
                    orientation: FamilyTree.orientation.left,
                    roots: [1],
                    // roots: [3],
                    
                    nodeBinding: {
                        field_0: 'name',
                        img_0: 'img'
                    },
                    nodeMouseClick: FamilyTree.action.details,
                    editForm: {readOnly: true},
                    mode: "dark",
                    template: "hugo",

                    nodeMenu:{
                        details: {text:"Details"},
                        
                    },
                    
                });
            }

            render() {
                return (
                    <div id="tree" ref={this.divRef}></div>
                );
            }
        }