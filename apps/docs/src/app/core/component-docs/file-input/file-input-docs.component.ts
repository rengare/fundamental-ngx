import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';

import * as fileInputH from '!raw-loader!./examples/file-input-example/file-input-example.component.html';
import * as fileInputT from '!raw-loader!./examples/file-input-example/file-input-example.component.ts';

import * as fileInputCustomH from '!raw-loader!./examples/file-input-custom-example/file-input-custom-example.component.html';
import * as fileInputCustomT from '!raw-loader!./examples/file-input-custom-example/file-input-custom-example.component.ts';

import * as fileInputInvalidH from '!raw-loader!./examples/file-input-drag-disabled-example/file-input-drag-disabled-example.component.html';
import * as fileInputInvalidT from '!raw-loader!./examples/file-input-drag-disabled-example/file-input-drag-disabled-example.component.ts';

import * as fileInputMaxT from '!raw-loader!./examples/file-input-max-example/file-input-max-example.component.ts';
import * as fileInputMaxH from '!raw-loader!./examples/file-input-max-example/file-input-max-example.component.html';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';
import { DocsSectionTitleComponent } from '../../../documentation/core-helpers/docs-section-title/docs-section-title.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input-docs.component.html',
    styleUrls: ['./file-input-docs.component.scss']
})
export class FileInputDocsComponent implements OnInit {
    fileInputExample: ExampleFile[] = [
        {
            language: 'html',
            code: fileInputH,
            fileName: 'file-input-example'
        },
        {
            language: 'typescript',
            component: 'FileInputExampleComponent',
            code: fileInputT,
            fileName: 'file-input-example'
        }
    ];

    fileInputCustom: ExampleFile[] = [
        {
            language: 'html',
            code: fileInputCustomH,
            fileName: 'file-input-custom-example'
        },
        {
            language: 'typescript',
            component: 'FileInputCustomExampleComponent',
            code: fileInputCustomT,
            fileName: 'file-input-custom-example'
        }
    ];

    fileInvalidCustom: ExampleFile[] = [
        {
            language: 'html',
            code: fileInputInvalidH,
            fileName: 'file-input-drag-disabled-example'
        },
        {
            language: 'typescript',
            component: 'FileInputDragDisabledExampleComponent',
            code: fileInputInvalidT,
            fileName: 'file-input-drag-disabled-example'
        }
    ];

    fileMaxSize: ExampleFile[] = [
        {
            language: 'html',
            code: fileInputMaxH,
            fileName: 'file-input-max-example'
        },
        {
            language: 'typescript',
            component: 'FileInputMaxExampleComponent',
            code: fileInputMaxT,
            fileName: 'file-input-max-example'
        }
    ];

    ngOnInit() { }
}
