import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../track.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Tags } from '../../models/tags';

@Component({
  selector: 'app-track-filters',
  templateUrl: './track-filters.component.html',
  styleUrls: ['./track-filters.component.scss'],
})
export class TrackFiltersComponent implements OnInit {
  allTags;
  tags: Tags[];
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
      .then((tags: Tags[]) => (this.tags = tags))
      .then(() =>
        this.tags.forEach(() => this.tagsFormArray.push(new FormControl(false)))
      );
  }

  submit() {
    const selectedTags = this.form.value.tags
      .map((v, i) => (v ? this.tags[i] : null))
      .filter((v) => v !== null);
    this.trackService
      .getFilteredTracks(selectedTags)
      .subscribe((val) => this.trackService.setState(val));
  }
}
