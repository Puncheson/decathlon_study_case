# decathlon_study_case
study case for decathlon turkey

The project is configured completely from scratch, without the use of CRA.
The structure for using themes is built and the main variables are laid down.

For the project architecture, I used the feature-sliced methodology.
(https://feature-sliced.design/)
For such a small project, I think its use is redundant. But it lays great opportunities for further scaling.

The project structure may seem confusing, but when solving business problems, this decomposition should be useful.

If necessary, I can rewrite the project structure.

└── src/
    ├── app/                    # Initializing application logic
    |    ├── index.tsx          #    Entrypoint for connecting the application (formerly App. tsx)
    |    └── index.css          #    Global application styles
    ├── pages/                  #
    ├── widgets/                #
    ├── features/               #
    ├── entities/               #
    ├── shared/                 #
    └── index.tsx               # Connecting and rendering the application
