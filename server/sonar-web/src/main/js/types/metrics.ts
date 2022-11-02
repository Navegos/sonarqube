/*
 * SonarQube
 * Copyright (C) 2009-2022 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
export enum MetricKey {
  alert_status = 'alert_status',
  blocker_violations = 'blocker_violations',
  branch_coverage = 'branch_coverage',
  bugs = 'bugs',
  burned_budget = 'burned_budget',
  business_value = 'business_value',
  class_complexity = 'class_complexity',
  classes = 'classes',
  code_smells = 'code_smells',
  cognitive_complexity = 'cognitive_complexity',
  comment_lines = 'comment_lines',
  comment_lines_data = 'comment_lines_data',
  comment_lines_density = 'comment_lines_density',
  complexity = 'complexity',
  complexity_in_classes = 'complexity_in_classes',
  complexity_in_functions = 'complexity_in_functions',
  conditions_to_cover = 'conditions_to_cover',
  confirmed_issues = 'confirmed_issues',
  coverage = 'coverage',
  critical_violations = 'critical_violations',
  development_cost = 'development_cost',
  directories = 'directories',
  duplicated_blocks = 'duplicated_blocks',
  duplicated_files = 'duplicated_files',
  duplicated_lines = 'duplicated_lines',
  duplicated_lines_density = 'duplicated_lines_density',
  duplications_data = 'duplications_data',
  effort_to_reach_maintainability_rating_a = 'effort_to_reach_maintainability_rating_a',
  executable_lines_data = 'executable_lines_data',
  false_positive_issues = 'false_positive_issues',
  file_complexity = 'file_complexity',
  file_complexity_distribution = 'file_complexity_distribution',
  filename_size = 'filename_size',
  filename_size_rating = 'filename_size_rating',
  files = 'files',
  function_complexity = 'function_complexity',
  function_complexity_distribution = 'function_complexity_distribution',
  functions = 'functions',
  generated_lines = 'generated_lines',
  generated_ncloc = 'generated_ncloc',
  info_violations = 'info_violations',
  last_change_on_maintainability_rating = 'last_change_on_maintainability_rating',
  last_change_on_releasability_rating = 'last_change_on_releasability_rating',
  last_change_on_reliability_rating = 'last_change_on_reliability_rating',
  last_change_on_security_rating = 'last_change_on_security_rating',
  last_change_on_security_review_rating = 'last_change_on_security_review_rating',
  last_commit_date = 'last_commit_date',
  leak_projects = 'leak_projects',
  line_coverage = 'line_coverage',
  lines = 'lines',
  lines_to_cover = 'lines_to_cover',
  maintainability_rating_effort = 'maintainability_rating_effort',
  major_violations = 'major_violations',
  minor_violations = 'minor_violations',
  ncloc = 'ncloc',
  ncloc_data = 'ncloc_data',
  ncloc_language_distribution = 'ncloc_language_distribution',
  new_blocker_violations = 'new_blocker_violations',
  new_branch_coverage = 'new_branch_coverage',
  new_bugs = 'new_bugs',
  new_code_smells = 'new_code_smells',
  new_conditions_to_cover = 'new_conditions_to_cover',
  new_coverage = 'new_coverage',
  new_critical_violations = 'new_critical_violations',
  new_development_cost = 'new_development_cost',
  new_duplicated_blocks = 'new_duplicated_blocks',
  new_duplicated_lines = 'new_duplicated_lines',
  new_duplicated_lines_density = 'new_duplicated_lines_density',
  new_info_violations = 'new_info_violations',
  new_line_coverage = 'new_line_coverage',
  new_lines = 'new_lines',
  new_lines_to_cover = 'new_lines_to_cover',
  new_maintainability_rating = 'new_maintainability_rating',
  new_major_violations = 'new_major_violations',
  new_minor_violations = 'new_minor_violations',
  new_reliability_rating = 'new_reliability_rating',
  new_reliability_remediation_effort = 'new_reliability_remediation_effort',
  new_security_hotspots = 'new_security_hotspots',
  new_security_hotspots_reviewed = 'new_security_hotspots_reviewed',
  new_security_rating = 'new_security_rating',
  new_security_remediation_effort = 'new_security_remediation_effort',
  new_security_review_rating = 'new_security_review_rating',
  new_sqale_debt_ratio = 'new_sqale_debt_ratio',
  new_technical_debt = 'new_technical_debt',
  new_uncovered_conditions = 'new_uncovered_conditions',
  new_uncovered_lines = 'new_uncovered_lines',
  new_violations = 'new_violations',
  new_vulnerabilities = 'new_vulnerabilities',
  open_issues = 'open_issues',
  projects = 'projects',
  public_api = 'public_api',
  public_documented_api_density = 'public_documented_api_density',
  public_undocumented_api = 'public_undocumented_api',
  quality_gate_details = 'quality_gate_details',
  quality_profiles = 'quality_profiles',
  releasability_effort = 'releasability_effort',
  releasability_rating = 'releasability_rating',
  reliability_rating = 'reliability_rating',
  reliability_rating_effort = 'reliability_rating_effort',
  reliability_remediation_effort = 'reliability_remediation_effort',
  reopened_issues = 'reopened_issues',
  security_hotspots = 'security_hotspots',
  security_hotspots_reviewed = 'security_hotspots_reviewed',
  security_rating = 'security_rating',
  security_rating_effort = 'security_rating_effort',
  security_remediation_effort = 'security_remediation_effort',
  security_review_rating = 'security_review_rating',
  security_review_rating_effort = 'security_review_rating_effort',
  skipped_tests = 'skipped_tests',
  sonarjava_feedback = 'sonarjava_feedback',
  sqale_debt_ratio = 'sqale_debt_ratio',
  sqale_index = 'sqale_index',
  sqale_rating = 'sqale_rating',
  statements = 'statements',
  team_at_sonarsource = 'team_at_sonarsource',
  team_size = 'team_size',
  test_errors = 'test_errors',
  test_execution_time = 'test_execution_time',
  test_failures = 'test_failures',
  test_success_density = 'test_success_density',
  tests = 'tests',
  uncovered_conditions = 'uncovered_conditions',
  uncovered_lines = 'uncovered_lines',
  violations = 'violations',
  vulnerabilities = 'vulnerabilities',
  wont_fix_issues = 'wont_fix_issues',
}

export enum MetricType {
  Rating = 'RATING',
  Percent = 'PERCENT',
  Integer = 'INT',
  Level = 'LEVEL',
  ShortInteger = 'SHORT_INT',
  ShortWorkDuration = 'SHORT_WORK_DUR',
  Data = 'DATA',
}

export function isMetricKey(key: string): key is MetricKey {
  return (Object.values(MetricKey) as string[]).includes(key);
}
