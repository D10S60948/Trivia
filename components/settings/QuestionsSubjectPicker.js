import React, { Component } from 'react';
import PickerCheckBox from 'react-native-picker-checkbox';
import { Text } from 'react-native';
import { setSubjects } from '../../redux/actions';
import { connect } from 'react-redux';

const items = [
    { itemKey: 0, itemDescription: 'Flags' },
    { itemKey: 1, itemDescription: 'Capitals' },
    { itemKey: 2, itemDescription: 'Languages' },
    { itemKey: 3, itemDescription: 'Borders' },
    { itemKey: 4, itemDescription: 'Population' },
    { itemKey: 5, itemDescription: 'Region' }
]

export class QuestionsSubjectPicker extends Component {
    setCheckedSubjects() {
        let newItemsList = []
        items.map(item => {
            if(this.props.selectedSubjects.includes(item.itemKey)) {
                newItemsList.push(item)
            }
        })
        return newItemsList
    }

    handleConfirm(pItems) {
        let selectedIndexes = []
        pItems.map(item => {
            selectedIndexes.push(item.itemKey)
        })
        this.props.setSubjects(selectedIndexes)
    }
     
    render() {
        let checkedSubjects = this.setCheckedSubjects()

        return (
            <PickerCheckBox
                data={items}
                headerComponent={<Text style={{fontSize:25}} >Subjects</Text>}
                OnConfirm={(pItems) => this.handleConfirm(pItems)}
                ConfirmButtonTitle='OK'
                DescriptionField='itemDescription'
                KeyField='itemKey'
                placeholder='select at least 1 subject'
                arrowColor='#FFD740'
                checkedItems={[...checkedSubjects]}
                placeholderSelectedItems ='$count selected items'
            />
        )
    }
}
  
function mapStateToProps(state) {
    return {
        selectedSubjects: state.play.selectedQuestionSubjects
    };
}

export default connect(mapStateToProps, { setSubjects })(QuestionsSubjectPicker)