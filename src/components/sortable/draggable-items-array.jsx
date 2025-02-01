import testImg from '../../imgs/test-img.jpg';
import About from '../draggable components/about/About';
import NextSteps from '../draggable components/next steps/NextSteps';
import ProjectCollection from '../projects/ProjectCollection';

const initialItems = [
	{
		id: 'about-draggable',
		content: <About />,
		invisible: false,
		double: true,
	},
	{
		id: 'A',
		content: 'Video1',
		invisible: false,
		double: false,
	},

	{
		id: 'projects-collection-draggable',
		content: <ProjectCollection />,
		invisible: false,
		double: false,
	},
	{
		id: 'B',
		content: 'Photo?',
		invisible: false,
		double: false,
	},
	{
		id: 'next-steps-draggable',
		content: <NextSteps />,
		invisible: false,
		double: true,
	},
	{
		id: 'G',
		content: 'Certifications',
		invisible: false,
		double: true,
	},

	{ id: 'D', content: 'Video2', invisible: false, double: false },
];

export default initialItems;
