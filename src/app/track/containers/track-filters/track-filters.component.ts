import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../track.service';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-track-filters',
  templateUrl: './track-filters.component.html',
  styleUrls: ['./track-filters.component.scss'],
})
export class TrackFiltersComponent implements OnInit {
  allTags;
  tags = [];
  form: FormGroup;

  constructor(
    private trackService: TrackService,
    private formBuilder: FormBuilder
  ) {}

  get tagsFormArray() {
    return this.form.controls.tags as FormArray;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tags: new FormArray([]),
    });

    this.allTags = this.trackService
      .getAllTags()
      .then((tags) => (this.tags = tags))
      .then(() =>
        this.tags.forEach(() => this.tagsFormArray.push(new FormControl(false)))
      );
  }
}
