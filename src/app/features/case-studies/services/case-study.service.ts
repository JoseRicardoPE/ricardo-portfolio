import { Injectable, inject } from "@angular/core";
import { API_CONFIG } from "../../../core/api.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CasesStudy } from "../models/case-study.model";


@Injectable({
  providedIn: 'root',
})

export class CaseStudyService {
    private readonly http = inject(HttpClient);
    private readonly casesStudiesUrl = `${API_CONFIG.baseUrl}/case-studies`;

    getCasesStudyBySlug(slug: string): Observable<{ data: CasesStudy }> {
        return this.http.get<{ data: CasesStudy }>(
            `${this.casesStudiesUrl}/${encodeURIComponent(slug)}`
        );
    }
}