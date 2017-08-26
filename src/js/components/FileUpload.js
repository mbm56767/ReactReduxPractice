import React from 'react'
import axios from 'axios'

export default class FileUpload extends React.Component{
    uploadFileRequest(event) {
            let data = new FormData();
            data.append('file', event.target.files[0]);
            data.append('name', "FirstFile");
            data.append('description', 'testing file upload in react');
            console.log('got file uploaded as:', event.target.files[0]);
            axios.post('http://localhost:9090/v1/fileUpload', data)
                .then(response => console.log('file uploaded successfully and response as:', response))
                .catch(error => console.log('file uploading is failed and response as:', response));
          }

     render() {
        return (
            <input type="file" onChange={this.uploadFileRequest} />
        )
     }
}