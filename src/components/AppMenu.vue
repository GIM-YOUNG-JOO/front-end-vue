<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                    Ch01. Vue Start
                </button>
            </h2>
            <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    Ch02. Component & Routing
                </button>
            </h2>
            <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam01View" class="nav-link">Exam01View: View Component(Single File)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam02View" class="nav-link">Exam02View: View Component(Folder)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam03View" class="nav-link">Exam03View: UI Component(Public & Local)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam04View" class="nav-link">Exam04View: View Movement</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam05View" class="nav-link">Exam05View: Nested Routes</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam06View" class="nav-link">Exam06View: URL Data</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Ch03. Data Binding
                </button>
            </h2>
            <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam01Expressions" class="nav-link">Exam01Expressions: Expressions</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam02NotState" class="nav-link">Exam02NotState: General Data</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam03State" class="nav-link">Exam03State: State Data</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam04ComputedFunBinding" class="nav-link">Exam04ComputedFunBinding:<br>Computed Function Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam05AttrBinding" class="nav-link">Exam05AttrBinding: Attribute Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam06InnerHtmlBinding" class="nav-link">Exam06InnerHtmlBinding: Inner Html Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam07IfShowBinding" class="nav-link">Exam07IfShowBinding: If Show Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam08RepeatBinding" class="nav-link">Exam08RepeatBinding: Repeat Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam09FormBinding" class="nav-link">Exam09FormBinding: Form Binding</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam10FallthroughAttr" class="nav-link">Exam10FallthroughAttr: Fallthrougn Attribute<br>템플릿 루트로 전달되는 속성</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam11Slot" class="nav-link">Exam11Slot: Slot</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    Ch04. Event Handling Watch
                </button>
            </h2>
            <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav nav-underline flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch04EventHandlingWatch/Exam01EventHandling" class="nav-link">Exam01EventHandling : Event Handling</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>